const appName = "{{ cookiecutter.repo_name }}"

const getAppName = () => {
  if (process.env.APP_NAME && process.env.APP_NAME !== appName) {
    throw new Error(`process.env.APP_NAME '${appName}' may not be modified after compiling`)
  } else {
    return appName
  }
}

module.exports = {
  experimental: {
    appDir: true,
  },
  basePath: `/${getAppName()}`,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: `/${getAppName()}`,
        permanent: false,
        basePath: false,
      },
    ]
  },
}
