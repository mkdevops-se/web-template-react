const APP_NAME = "{{ cookiecutter.repo_name }}"

function getConfig(appEnvironment) {
  let config = {
    appName: APP_NAME,
    nodeEnv: process.env.NODE_ENV,
    appEnv: appEnvironment || "N/A",
    production: true,
  }
  if (["production", "staging", "local"].includes(appEnvironment)) {
    if (appEnvironment === "production") {
      config.production = true
    } else if (appEnvironment === "staging") {
      config.production = false
    } else {
      config.production = false
    }
    console.debug(`getConfig, NEXT_PUBLIC_APP_ENV='${appEnvironment}': ${JSON.stringify(config)}`)
  } else {
    console.error(
      `getConfig, illegal NEXT_PUBLIC_APP_ENV='${appEnvironment}': ${JSON.stringify(config)}`
    )
  }
  return config
}

module.exports = {
  basePath: `/${APP_NAME}`,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: `/${APP_NAME}`,
        permanent: false,
        basePath: false,
      },
    ]
  },
  // Will only be available on the server side
  serverRuntimeConfig: {},
  // Will be available on both server and client
  publicRuntimeConfig: getConfig(process.env.NEXT_PUBLIC_APP_ENV),
}

console.log(`Config initialized, NODE_ENV=${process.env.NODE_ENV}`)
