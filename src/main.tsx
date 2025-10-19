import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Posts from './pages/Posts.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path:"",
          element: <Home/>
        },
        {
          path: "posts",
          element: <Posts/>
        },
        {
          path:"contact",
          element:<Contact/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
