
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Emp from './components/Emp'
import PostEmp from './components/PostEmp'
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
       path:"/emp",
      element:<div><Navbar/><Emp/><Footer/></div>,
    },
    {
       path:"/postemp",
      element:<div><Navbar/><PostEmp/><Footer/></div>,
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
      element:<div><Navbar/><Dashboard/><Footer/></div>,
    },
    {
       path:"/alluser",
      element:<div><Navbar/><Alluser/><Footer/></div>,
    },
     {
       path:"/employee",
      element:<div><Navbar/><PostUSer/><Footer/></div>,
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
      element:<div><Navbar/><UpdateUser/><Footer/></div>,
    },
    {
       path:"/count",
      element:<div><Navbar/><Count/><Footer/></div>,
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
