import axios from 'axios'
import { useState, useEffect } from 'react'
import { SHORT_TO_ORIGINAL } from '../statics/fetchUrls'

export default function ShortenedPage() {
  const [notFound, setNotFound] = useState(false)
  //! Still has to be a better way to do this
  useEffect(() => {
    axios.get(SHORT_TO_ORIGINAL(window.location.pathname.substring(window.location.pathname.indexOf('/', + 1) + 1))).then(response => {
      //! DELETE
      console.log(response.status)
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