import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonatDetail from './Components/DonatDetail/DonatDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/donation',
        loader:()=>fetch('donation.json'),
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/donate/:id',
        loader:()=>fetch('donation.json'),
        element:<DonatDetail></DonatDetail>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
