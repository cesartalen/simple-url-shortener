import axios from 'axios'
import { useState } from 'react'
import { SHORTEN_URL } from '../statics/fetchUrls'

export default function IndexPage() {
  const[url, setUrl] = useState('')
  const[shortenedUrl, setShortenedUrl] = useState('')
  const[statsUrl, setStatsUrl] = useState('')
  const [error, setError] = useState('')

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value)
  }

  const shortenUrl = () => {
    if(!/^https?:\/\//.test(url)) {
      setError('URL must start with http:// or https://')
      return
    }
    axios.post(SHORTEN_URL, {
      original: url
    }).then(function (response) {
      setShortenedUrl(location.host + "/s/" + response.data.shortened)
      setStatsUrl(location.host + "/stats/" + response.data.shortened)
    }).catch(function (error) {
      console.log(error)
    })
  }

  return <div>{error && <div style={{ color: 'red' }}>{error}</div>}
  {statsUrl && <><a className='text-grey-300' href={statsUrl}>statspage: {statsUrl}</a><br/></>}<a className=' text-green-700 font-bold' href={shortenedUrl}>{shortenedUrl}</a> <br/><input onChange={handleInput} className='rounded px-4 border-2
  border-gray-500 focus:outline-none focus:bg-white focus:border-red-500 mr-3'></input><button onClick={shortenUrl}>Shorten</button></div>
}