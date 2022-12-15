import { NextApiRequest, NextApiResponse } from "next"

export default function Status(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: "up" })
}
