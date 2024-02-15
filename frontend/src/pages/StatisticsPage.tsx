/*
Make link to this page from index page, when a page is made there should be a second button for viewing statistics

This page should also have a link to the page it is linking to, that is clickable, and a clickable "shortened" form of this link, and a link to return back to homepage (IndexPage)..
 */

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function StatisticsPage() {
  const [notFound, setNotFound] = useState(false)
  const [shortenedURL, setShortenedURL] = useState('')
  const [originalURL, setOriginalURL] = useState('')
  const [clicks, setClicks] = useState(0)
  //axios.post(`http://127.0.0.1:3000/stats/${window.location.pathname.substring(3)}`)
  //! There has to be a better way to do this..
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/stats/${window.location.pathname.substring(window.location.pathname.indexOf('/', + 1) + 1)}`).then(res => {
      if(res.status === 200) {
        setShortenedURL(window.location.origin + /s/ + window.location.pathname.substring(window.location.pathname.indexOf('/', + 1) + 1))
        setOriginalURL(res.data.Original)
        setClicks(res.data.Clicks)
      } else {
        setNotFound(true)
      }
    })
    .catch(error => {
      console.error('Error:', error) 
    })
  }, [])
  return(
    <div>
      {notFound ? (
        <div>There is no such link</div>
      ) : <div>Shortened: {shortenedURL}<br/>Original url: {originalURL} <br/> Clicks: {clicks}</div>}
    </div>
  )
}