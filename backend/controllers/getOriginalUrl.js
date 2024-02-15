import { shortModel } from '../models/urlSchema.js'

export const handleGetOriginalUrl = async (req, res) => {
  try {
    const urls = await shortModel.find({
      shortened: `${req.params[0]}`,
    })
    if (urls.length > 0) {
      urls[0].clicks = urls[0].clicks + 1
      await urls[0].save()
      res.status(200).send({ message: urls[0].original })
    } else {
      res.status(204).send({ message: 'url not found' })
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: 'Error getting original URL' })
  }
}
