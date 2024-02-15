import express from 'express'
import { handleGetUrlStats } from '../controllers/getUrlStats.js'

export const router = express.Router()

router.get('/*', handleGetUrlStats)
