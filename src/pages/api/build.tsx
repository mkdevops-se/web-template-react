import { NextApiRequest, NextApiResponse } from "next"
import { BUILD_TIMESTAMP, COMMIT_LINK, BUILD_COMMIT_SHA1 } from "~/lib/build"

export default function Build(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    BUILD_TIMESTAMP: BUILD_TIMESTAMP,
    COMMIT_LINK: COMMIT_LINK,
    BUILD_COMMIT_SHA1: BUILD_COMMIT_SHA1,
  })
}
