import { NextParsedUrlQuery } from "next/dist/server/request-meta"
import Date from "~/ui/Date"
import { getPostData } from "~/lib/posts"
import utilStyles from "~/styles/utils.module.css"
import { snooze } from "~/lib/utils"

type PostPage = {
  params: NextParsedUrlQuery
}

const injectPostContentHtml = (content: string) => {
  return {
    __html: content,
  }
}

const ServerPostPage = async ({ params }: PostPage) => {
  await snooze(150)
  const postData = await getPostData(params.id as string)

  return (
    <article>
      <h1>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={injectPostContentHtml(postData.contentHtml)} />
    </article>
  )
}

export default ServerPostPage
