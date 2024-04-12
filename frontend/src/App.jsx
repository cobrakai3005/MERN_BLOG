import { useState } from 'react'
import { Outlet, createRoutesFromElements } from 'react-router-dom'
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from './pages/Signin';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Layout from './pages/Layout';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='projects' element={<Projects />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    )
  )

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
