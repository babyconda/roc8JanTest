import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import SearchPage from './pages/SearchPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Context from '../context.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='create-account' element={<RegisterPage/>} />
      <Route path='search' element={<SearchPage/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    <ToastContainer />
    </Context>    
  </React.StrictMode>,
)
