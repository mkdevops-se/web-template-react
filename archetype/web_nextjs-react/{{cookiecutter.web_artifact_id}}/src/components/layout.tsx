import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"
import utilStyles from "~/styles/utils.module.css"
import typographyStyles from "~/styles/typography.module.css"
import Link from "next/link"
import { BUILD_TIMESTAMP, BUILD_COMMIT_SHA1, COMMIT_LINK } from "~/lib/build"

const name = "{{ cookiecutter.repo_name }}"
export const siteTitle = `${name} Next.js-React Sample Website`

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{name}</title>
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
                src={`/${name}/image/profile.jpg`}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={typographyStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src={`/${name}/image/profile.jpg`}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </Link>
              <h2 className={typographyStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <p>Build timestamp: {BUILD_TIMESTAMP}</p>
        <p>
          Build commit:{" "}
          <a href={COMMIT_LINK} rel="noreferrer" target="_blank">
            {BUILD_COMMIT_SHA1}
          </a>
        </p>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <footer className={styles.footer}>🐾 Footsies 🐾</footer>
    </>
  )
}
