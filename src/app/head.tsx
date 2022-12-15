export default function Head() {
  const appName = process.env.APP_NAME
  return (
    <>
      <title>{appName}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta name="og:title" content={appName} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          appName
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={appName} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
