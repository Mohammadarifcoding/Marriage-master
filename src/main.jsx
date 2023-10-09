import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Provider/AuthProvider';
import Register from './Register/Register';
import Description from './Components/Description/Description';
import PrivateProvider from './Components/Provider/PrivateProvider';
import About from './Components/Description/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
      , {
        path:'/login',
        element:<Login></Login>
      }
      ,{
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/about',
        loader:()=> fetch('/AboutUs.json'),
        element:<PrivateProvider><About></About></PrivateProvider>
      }
      ,
      {
        path:'/descrition/:id',
        loader:()=> fetch('/ServiceData.json'),
        element:<PrivateProvider><Description></Description></PrivateProvider>  
      },
      {
        path:'/gallery',
        loader:()=> fetch('/Gallery.json'),
        element:<PrivateProvider><Gallery></Gallery></PrivateProvider>
      }
      ,
      {
        path:'/contact',
        loader:()=>fetch('/Gallery.json'),
        element: <PrivateProvider><Contact></Contact></PrivateProvider>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
