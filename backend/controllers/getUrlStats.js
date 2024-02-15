import { shortModel } from '../models/urlSchema.js'

export const handleGetUrlStats = async (req, res) => {
  try {
    const urls = await shortModel.find({
      shortened: `${req.params[0]}`,
    })
    if (urls.length > 0) {
      res
        .status(200)
        .send({ Original: urls[0].original, Clicks: urls[0].clicks })
    } else {
      res.status(204).send({ message: 'url not found' })
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: 'Error getting original URL' })
  }
}
