import { createRoot } from "react-dom/client";
import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);
