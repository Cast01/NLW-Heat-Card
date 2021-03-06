// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const arr = [
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' }
  ]

  res.status(200).json({ name: JSON.stringify(arr) })
}
