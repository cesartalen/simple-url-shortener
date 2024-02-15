import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ShortenedPage() {
  const [notFound, setNotFound] = useState(false)
  //! Still has to be a better way to do this
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/s/${window.location.pathname.substring(window.location.pathname.indexOf('/', + 1) + 1)}`).then(response => {
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