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
  googleCalendarId: readEnv('VITE_GOOGLE_CALENDAR_ID'),
  googleCalendarApiKey: readEnv('VITE_GOOGLE_CALENDAR_API_KEY'),
} as const
