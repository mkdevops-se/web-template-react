import { getPostData } from "~/lib/posts"

export default async function PostHead({ params }) {
  const postData = await getPostData(params.id as string)

  return (
    <>
      <title>{postData.title}</title>
    </>
  )
}
