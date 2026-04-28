import type { EventItem } from '../data/events'

type GoogleCalendarDate = {
  date?: string
  dateTime?: string
}

type GoogleCalendarEvent = {
  id?: string
  summary?: string
  description?: string
  location?: string
  start?: GoogleCalendarDate
  end?: GoogleCalendarDate
  htmlLink?: string
}

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[]
}

type GoogleCalendarErrorResponse = {
  error?: {
    message?: string
  }
}

type FetchGoogleCalendarEventsOptions = {
  apiKey: string
  calendarId: string
  locale: string
  signal?: AbortSignal
}

const getEventDate = (date?: GoogleCalendarDate) => {
  if (date?.dateTime) {
    return new Date(date.dateTime)
  }

  if (date?.date) {
    return new Date(`${date.date}T00:00:00`)
  }

  return null
}

const formatEventDate = (date: Date, isAllDay: boolean, locale: string) =>
  new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    ...(isAllDay
      ? {}
      : {
          hour: 'numeric',
          minute: '2-digit',
        }),
  }).format(date)

const toGoogleCalendarDate = (date: Date) =>
  date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

const createGoogleCalendarUrl = (event: GoogleCalendarEvent, start: Date, end: Date) => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.summary ?? 'JSA event',
    dates: `${toGoogleCalendarDate(start)}/${toGoogleCalendarDate(end)}`,
    details: event.description ?? '',
    location: event.location ?? '',
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

const toEventItem = (event: GoogleCalendarEvent, locale: string): EventItem | null => {
  const start = getEventDate(event.start)

  if (!start) {
    return null
  }

  const end = getEventDate(event.end) ?? new Date(start.getTime() + 60 * 60 * 1000)
  const isAllDay = Boolean(event.start?.date && !event.start.dateTime)

  return {
    id: event.id,
    title: event.summary ?? 'Untitled event',
    date: formatEventDate(start, isAllDay, locale),
    location: event.location ?? '',
    description: event.description ?? '',
    calendarUrl: createGoogleCalendarUrl(event, start, end),
  }
}

export const fetchGoogleCalendarEvents = async ({
  apiKey,
  calendarId,
  locale,
  signal,
}: FetchGoogleCalendarEventsOptions) => {
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
  )

  url.searchParams.set('key', apiKey)
  url.searchParams.set('singleEvents', 'true')
  url.searchParams.set('orderBy', 'startTime')
  url.searchParams.set('timeMin', new Date().toISOString())
  url.searchParams.set('maxResults', '25')
  url.searchParams.set(
    'fields',
    'items(id,summary,description,location,start,end,htmlLink)',
  )

  const response = await fetch(url, { signal })

  if (!response.ok) {
    let errorMessage = response.statusText

    try {
      const errorData = (await response.json()) as GoogleCalendarErrorResponse
      errorMessage = errorData.error?.message ?? errorMessage
    } catch {
      // Keep the status text when Google does not return a JSON error body.
    }

    throw new Error(`${response.status}: ${errorMessage}`)
  }

  const data = (await response.json()) as GoogleCalendarResponse

  return (data.items ?? [])
    .map((event) => toEventItem(event, locale))
    .filter((event): event is EventItem => event !== null)
}
