import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { router as shortenUrlRoute } from './routes/shorten.js'
import { router as shortUrlRoute } from './routes/url.js'
import { router as urlStatsRoute } from './routes/stats.js'

dotenv.config()
const PORT = process.env.port || 3000

const app = express()
app.use(express.json())

// app.use(cors())

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://www.localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use('/shorten', shortenUrlRoute)
app.use('/s', shortUrlRoute)
app.use('/stats', urlStatsRoute)

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((error) => {
    console.log(error)
  })
