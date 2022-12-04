import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import getConfig from "next/config"

export const { appName, appEnv } = getConfig().publicRuntimeConfig

export const siteTitle = `${appName} Next.js-React Sample Website`

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={`/${appName}/image/profile.jpg`}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={appName}
            />
            <h1 className={utilStyles.heading2Xl}>
              {appName} @ {appEnv}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src={`/${appName}/image/profile.jpg`}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={appName}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {appName}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
