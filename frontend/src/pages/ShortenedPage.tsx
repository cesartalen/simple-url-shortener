import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SHORT_TO_ORIGINAL } from '../statics/fetchUrls'

export default function ShortenedPage() {
  const [notFound, setNotFound] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    axios.get(SHORT_TO_ORIGINAL(id)).then(response => {
      if(response.status === 200) {
        location.href = response.data.message
      } else if (response.status === 204) {
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
    ) : null}
  </div>)
}