import ShortUniqueId from 'short-unique-id'
import { shortModel } from '../models/urlSchema.js'

export const handleGenerateShortUrl = async (req, res) => {
  try {
    if (!req.body.original) {
      return res.status(400).send({
        message: 'include original (url)',
      })
    }
    const urls = await shortModel.find({
      original: req.body.original,
    })

    if (urls.length > 0) {
      /*
      ! Maybe some different handling of urls that already exists?
      res.status(409).send({ shortened: urls[0].shortened })
      */
      return res.status(201).send(urls[0])
    } else {
      const newUrl = {
        original: req.body.original,
      }

      const url = await shortModel.create(newUrl)
      return res.status(201).send(url)
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: 'error' })
  }
}

/*
  console.log(req.body)
  const body = req.body
  if (!body.url) {
    return res.status(400).json({ error: 'URL Must be included.' })
  }
  const uid = new ShortUniqueId({ length: 12 })
  let shortID = uid.rnd()
  return res.json({ id: shortID })
  */
//res.send(req.path)
