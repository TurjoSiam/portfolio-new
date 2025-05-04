import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import RateWise from './Pages/RateWise/RateWise';
import MovieSphere from './Pages/MovieSphere/MovieSphere';
import Ripple from './Pages/Ripple/Ripple';
import Craving from './Pages/Craving/Craving';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/project/ratewise",
        element: <RateWise></RateWise>
      },
      {
        path: "/project/moviesphere",
        element: <MovieSphere></MovieSphere>
      },
      {
        path: "/project/ripple",
        element: <Ripple></Ripple>
      },
      {
        path: "/project/craving",
        element: <Craving></Craving>
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
