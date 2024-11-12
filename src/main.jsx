import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import ImageGen from './Pages/ImageGen.jsx'
import Latest from './Pages/Latest.jsx'
import TopList from './Pages/TopList.jsx'
import Random from './Pages/Random.jsx'
import Upload from './Pages/Upload.jsx'
import AnimeCartoons from './Pages/AnimeCartoons.jsx'
import ImageDisplay from './Pages/ImageDisplay.jsx'



let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/imageGen",
    element: <ImageGen />,
  },
  {
    path: "/latest",
    element: <Latest />,
  },
  {
    path: "/topList",
    element: <TopList />,
  },
  {
    path: "/random",
    element: <Random />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/AnimeCartoons",
    element: <AnimeCartoons />,
  },
  {
    path: "/image-display", // Add the ImageDisplay route
    element: <ImageDisplay />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes}/>
  </StrictMode>,
)
