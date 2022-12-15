type SafeProcessEnv = {
  NODE_ENV: string
  APP_NAME: string
  ENV_NAME: string
}

const mandatoryEnvVars = ["APP_NAME", "ENV_NAME"]

export const getSafeProcessEnv = (): SafeProcessEnv => {
  const currentEnv = {
    NODE_ENV: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME,
    ENV_NAME: process.env.ENV_NAME,
  }

  for (const envKey of mandatoryEnvVars) {
    if (!currentEnv[envKey]) {
      const errorMessage = `Required environment variable ${envKey} is not set (NODE_ENV=${process.env.NODE_ENV})`
      if (process.env.NODE_ENV !== "production") {
        throw new Error(errorMessage)
      } else {
        console.warn(errorMessage)
      }
    }
  }

  return currentEnv
}
