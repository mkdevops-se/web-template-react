import Image from "next/image"
import Link from "next/link"
import utilStyles from "~/styles/utils.module.css"
import postStyles from "./post.module.css"

export default function ServerPostLayout({ children }: { children: React.ReactNode }) {
  const appName = process.env.APP_NAME
  return (
    <section className={postStyles.container}>
      <header className={postStyles.header}>
        <Link href="/">
          <Image
            priority
            src={`/${appName}/images/profile.jpg`}
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={appName}
          />
        </Link>
        <h2>
          <Link href="/">{appName}</Link> @ {process.env.ENV_NAME}
        </h2>
      </header>
      {children}
      <Link href={"/"} className={postStyles.backToHome}>
        ← Back to Home
      </Link>
    </section>
  )
}
