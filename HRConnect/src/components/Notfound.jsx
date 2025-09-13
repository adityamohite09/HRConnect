import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
  const navi = useNavigate();
  const handle=()=>{
navi("/")
  }
  return (
    <div className=' text-center mt-4'>
      <i>Page Not Found 404</i>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-outline-dark' onClick={handle}>go to home page</button>
      </div>
    </div>
  )
}

export default Notfound
