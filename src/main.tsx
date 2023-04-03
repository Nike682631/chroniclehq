import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import OurStory from './pages/OurStory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "our-story",
    element: <OurStory />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
