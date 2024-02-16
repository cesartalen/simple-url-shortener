import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import IndexPage from './pages/IndexPage.tsx'
import ShortenedPage from './pages/ShortenedPage.tsx'
import './index.css'
import StatisticsPage from './pages/StatisticsPage.tsx'
import BaseLayout from './layouts/BaseLayout.tsx'

const router = createBrowserRouter([
  {
    path: "/s/:id",
    element: <ShortenedPage/>
  },
  {
  element: <BaseLayout/>,
  children: [
  {
    path:"/",
    element: <IndexPage/>,
  },
  {
    path:"/stats/:id",
    element: <StatisticsPage/>
  }
]
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