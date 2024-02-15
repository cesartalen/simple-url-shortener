import mongoose from 'mongoose'
import ShortUniqueId from 'short-unique-id'

const uid = new ShortUniqueId({ length: 12 })

const urlSchema = mongoose.Schema({
  original: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^https?:\/\//.test(value)
      },
      message: 'URL must start with http:// or https://',
    },
  },
  shortened: {
    type: String,
    required: true,
    default: () => uid.rnd(),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
})

export const shortModel = mongoose.model('shorturl', urlSchema)
