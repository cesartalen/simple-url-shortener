import express from 'express'
import { handleGetOriginalUrl } from '../controllers/getOriginalUrl.js'

export const router = express.Router()

router.get('/*', handleGetOriginalUrl)
