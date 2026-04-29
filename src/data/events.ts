import type { EventCategory } from '../config/appConfig'

export type EventItem = {
  id?: string
  category: EventCategory
  title: string
  date: string
  startsAt?: string
  location: string
  description: string
  calendarUrl: string
}

export const featuredEvents: EventItem[] = [
  {
    category: 'communityCulture',
    title: 'Hanami Picnic at the Lakeshore',
    date: 'April 20',
    location: 'Lakeshore Path',
    description: 'Celebrate spring with food, games, and a relaxed outdoor gathering.',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Hanami+Picnic+at+the+Lakeshore',
  },
  {
    category: 'communityCulture',
    title: 'Japanese Conversation Table',
    date: 'April 24',
    location: 'Memorial Union',
    description: 'Practice Japanese in small groups with native speakers and learners.',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Japanese+Conversation+Table',
  },
  {
    category: 'career',
    title: 'Career Night with Alumni',
    date: 'May 2',
    location: 'Engineering Hall',
    description: 'Hear from alumni about internships, job search strategies, and networking.',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Career+Night+with+Alumni',
  },
  {
    category: 'communityCulture',
    title: 'Japanese Film Screening',
    date: 'May 8',
    location: 'Van Hise Hall',
    description: 'Watch a contemporary Japanese film and join a discussion afterwards.',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Japanese+Film+Screening',
  },
  {
    category: 'career',
    title: 'Resume Review Sprint',
    date: 'May 12',
    location: 'College Library',
    description: 'Get quick resume feedback from peers and alumni before internship season.',
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resume+Review+Sprint',
  },
]
