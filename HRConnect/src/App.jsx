
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Notfound from './components/Notfound'
import Dashboard from './components/Dashboard'
import PostUSer from './employee/PostUSer'
import UpdateUser from  './employee/UpdateUser'
import Footer from './components/Footer'
import Registration from './components/Registration'
import Login from './components/Login'
import Profile from './components/Profile'
import Nav from "./components/Nav"
import Count from './employee/Count'
import Adminprofile from './components/Adminprofile'
import Alluser from './components/Alluser'
import LeaveRequest from './employee/LeaveRequest'
import FetchLeaveRequest from './employee/FetchLeaveRequest'
function App() {
  
  const router =createBrowserRouter
([
    {
      path:"/",
      element:<div><Nav/><Home/><Footer/></div>,
    },
     {
       path:"/registration",
      element:<div><Nav/><Registration/><Footer/></div>,
    },
      {
       path:"/login",
      element:<div><Nav/><Login/><Footer/></div>,
    },
     {
       path:"/Dashboard",
      element:<div><Nav/><Dashboard/><Footer/></div>,
    },
    {
       path:"/alluser",
      element:<div><Nav/><Alluser/><Footer/></div>,
    },
     {
       path:"/employee",
      element:<div><Nav/><PostUSer/><Footer/></div>,
    },
     {
       path:"/profile",
      element:<div><Nav/><Profile/><Footer/></div>,
    },
     {
       path:"/admin",
      element:<div><Nav/><Adminprofile/><Footer/></div>,
    },
    {
       path:"/fetchrequest",
      element:<div><Nav/><FetchLeaveRequest/><Footer/></div>,
    },
      {
       path:"/leaverequest",
      element:<div><Nav/><LeaveRequest/><Footer/></div>,
    },
    {
       path:"/employee/:id",
      element:<div><Nav/><UpdateUser/><Footer/></div>,
    },
    {
       path:"/count",
      element:<div><Nav/><Count/><Footer/></div>,
    },
     {
        path : "*",
        element : <Notfound/>,
      }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
