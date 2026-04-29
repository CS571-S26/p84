type EnvMap = Record<string, string | undefined>
export type EventCategory = 'career' | 'communityCulture' | 'collaborations' | 'external'

const processEnv: EnvMap =
  (globalThis as { process?: { env?: EnvMap } }).process?.env ?? {}

const sources: EnvMap[] = [import.meta.env as EnvMap, processEnv]

const readEnv = (key: string) => {
  for (const source of sources) {
    const rawValue = source[key]
    const value = rawValue?.trim()

    if (value) {
      return value
    }
  }

  return undefined
}

export const eventCategories: EventCategory[] = [
  'career',
  'communityCulture',
  'collaborations',
  'external',
]

export const appConfig = {
  googleCalendarApiKey: readEnv('VITE_GOOGLE_CALENDAR_API_KEY'),
  googleCalendarIds: {
    career: readEnv('VITE_GOOGLE_CALENDAR_ID_CAREER'),
    communityCulture: readEnv('VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE'),
    collaborations: readEnv('VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS'),
    external: readEnv('VITE_GOOGLE_CALENDAR_ID_EXTERNAL'),
  } as Record<EventCategory, string | undefined>,
} as const
