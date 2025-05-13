import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from './layoutes/MainLayOut.jsx';
import Home from './layoutes/components/Home.jsx';
import AddCoffee from './layoutes/components/AddCoffee.jsx';
import UpdateCoffee from './layoutes/components/UpdateCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
    children:[
      {
        index:true,
        loader:()=>fetch("http://localhost:5000/coffees"),
        element:<Home></Home>
      },
      {
        path:"addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"updateCoffee",
        element:<UpdateCoffee></UpdateCoffee>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
