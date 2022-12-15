import Head from "next/head"
import Layout, { siteTitle } from "~/components/layout"
import utilStyles from "~/styles/utils.module.css"
import typographyStyles from "~/styles/typography.module.css"
import { getSortedPostsData } from "~/lib/posts"
import Link from "next/link"
import Date from "~/components/date"
import { GetStaticProps } from "next"

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
