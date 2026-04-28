const defaultCalendarId =
  '6396dbb89e4daa013547307a45c841a651b8f5c6f11a842b803feeec16e0cd67@group.calendar.google.com'

type EnvMap = Record<string, string | undefined>

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

export const appConfig = {
  googleCalendarId: readEnv('VITE_GOOGLE_CALENDAR_ID') ?? defaultCalendarId,
  googleCalendarApiKey: readEnv('VITE_GOOGLE_CALENDAR_API_KEY'),
} as const
