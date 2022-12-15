import { cookies, headers } from "next/headers"
import Script from "next/script"
import { getSafeProcessEnv } from "~/lib/env"
import "~/styles/global.css"
import homeStyles from "./home.module.css"
import { BUILD_COMMIT_SHA1, BUILD_TIMESTAMP, COMMIT_LINK } from "~/lib/build"

const injectSafeProcessEnv = () => {
  const serverEnv = getSafeProcessEnv()
  console.debug(`injectSafeProcessEnv, server env:`, serverEnv)
  return {
    __html:
      `window.process = {"env": ` +
      JSON.stringify(serverEnv) +
      `}; console.log("Browser subset of 'process.env' injected:", process.env);`,
  }
}

export default function ServerHomeLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers()
  const userAgent = headersList.get("user-agent")
  const allCookies = cookies().getAll()
  console.debug(`Serving root layout for ${userAgent} with cookies ${JSON.stringify(allCookies)}`)
  return (
    <html>
      <head>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          id="injectSafeProcessEnv"
          dangerouslySetInnerHTML={injectSafeProcessEnv()}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <main className={homeStyles.container}>{children}</main>
        <footer className={homeStyles.footer}>
          <p>
            <span>
              🐾 Footsies / Build:{" "}
              <a href={COMMIT_LINK} rel="noreferrer" target="_blank">
                {BUILD_COMMIT_SHA1}
              </a>{" "}
              @ {BUILD_TIMESTAMP} 🐾
            </span>
          </p>
        </footer>
      </body>
    </html>
  )
}
