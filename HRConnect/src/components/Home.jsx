import React from 'react'

function Home() {
  return (
    <div className='container bg-light'>
    <div className='d-flex justify-content-center flex-column' style={{height:"70vh", width:"100%"}}>
      <h1 className='text-center text-warning'>--HRConnect--</h1>
      <div className='d-flex justify-content-center'>
      <p className='mt-4  col-12 col-md-10 col-lg-6'>The project flow is: React handles the frontend UI and sends API requests to Spring Boot, which processes business logic and communicates with MySQL to store or fetch employee data. The response flows back as JSON, and React updates the UI accordingly.</p>
      </div>
    </div>
    </div>
  )
}

export default Home
