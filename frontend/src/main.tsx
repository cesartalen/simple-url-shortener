import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import IndexPage from './pages/IndexPage.tsx'
import ShortenedPage from './pages/ShortenedPage.tsx'
import './index.css'
import StatisticsPage from './pages/StatisticsPage.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <IndexPage/>,
  },
  {
    path: "/s/:id",
    element: <ShortenedPage/>
  },
  {
    path:"/stats/:id",
    element: <StatisticsPage/>
  }
])
/* under element: <App/>
children: [{
  path: "s/:id",
  element: <ShortenedPage/>
}]

*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)

  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */