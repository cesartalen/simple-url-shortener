import axios from 'axios'
import { useState } from 'react'

export default function IndexPage() {
  const[url, setUrl] = useState('')
  const[shortenedUrl, setShortenedUrl] = useState('')
  const [error, setError] = useState('')

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value)
  }

  const shortenUrl = () => {
    if(!/^https?:\/\//.test(url)) {
      setError('URL must start with http:// or https://')
      return
    }
    axios.post('http://127.0.0.1:3000/shorten', {
      original: url
    }).then(function (response) {
      //? https://www.   ...
      //setShortenedUrl("https://www." + location.host + "/s/" + response.data.shortened)
      setShortenedUrl(location.host + "/s/" + response.data.shortened)
    }).catch(function (error) {
      console.log(error)
    })
  }

  return <div>{error && <div style={{ color: 'red' }}>{error}</div>}<a href={shortenedUrl}>{shortenedUrl}</a> <input onChange={handleInput}></input><button onClick={shortenUrl}>Shorten</button></div>
}