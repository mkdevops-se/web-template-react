import Image from "next/image"
import Link from "next/link"
import Date from "~/ui/Date"
import { getSortedPostsData } from "~/lib/posts"
import utilStyles from "~/styles/utils.module.css"
import { getSafeProcessEnv } from "~/lib/env"
import homeStyles from "./home.module.css"
import typographyStyles from "~/styles/typography.module.css"

const ServerHomePage = () => {
  const allPostsData = getSortedPostsData()
  const serverEnv = getSafeProcessEnv()
  const appName = serverEnv.APP_NAME
  console.debug(
    `Rendering home page with APP_NAME='${appName}' and ENV_NAME='${serverEnv.ENV_NAME}'`
  )

  return (
    <>
      <header className={homeStyles.header}>
        <Image
          priority
          src={`/${appName}/images/profile.jpg`}
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={appName}
        />
        <h1>
          {appName} @ {process.env.ENV_NAME}
        </h1>
      </header>
      <section className={typographyStyles.headingMd}>
        <p>
          This is a bare bone Next.js-React website generated via the{" "}
          <a href="https://github.com/mkdevops-se/web-template-react">web-template-react</a> GitHub
          repo template.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${typographyStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={typographyStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`${appName}/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ServerHomePage
