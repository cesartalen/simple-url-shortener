/*
Make link to this page from index page, when a page is made there should be a second button for viewing statistics

This page should also have a link to the page it is linking to, that is clickable, and a clickable "shortened" form of this link, and a link to return back to homepage (IndexPage)..
 */

import axios from 'axios'
import { useEffect, useState } from 'react'
import { GET_URL_STATS } from '../statics/fetchUrls'
import { useParams } from 'react-router-dom'

export default function StatisticsPage() {
  const { id } = useParams()
  const [notFound, setNotFound] = useState(false)
  const [shortenedURL, setShortenedURL] = useState('')
  const [originalURL, setOriginalURL] = useState('')
  const [clicks, setClicks] = useState(0)
  
  useEffect(() => {
    axios.get(GET_URL_STATS(id)).then(res => {
      if(res.status === 200) {
        setShortenedURL(window.location.origin + /s/ + id)
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