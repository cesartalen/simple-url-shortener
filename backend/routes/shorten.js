import express from 'express'
import { handleGenerateShortUrl } from '../controllers/shortenUrl.js'

export const router = express.Router()

router.post('/', handleGenerateShortUrl)
