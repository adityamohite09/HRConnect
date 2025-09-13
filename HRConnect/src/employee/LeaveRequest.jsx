import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LeaveRequest() {
    
   const navi =useNavigate();
  function handlepage(){
       
        navi("/profile");
    }
    const[leave,setLeave] = useState(
        {
            name:"",
            reason:"",
            startdate:"",
            enddate:""
        }
    );
    

    const handleinputchange=(event)=>{
        const{name,value}=event.target;
        setLeave({...leave,[name]:value})
    };
    
        const handlesubmit = async(e)=>{
            e.preventDefault();
            console.log(leave);
            try{
                const reponse = await fetch("http://localhost:8080/api/leaverequest",{
                    method:"POST",
                    headers:{"content-Type":"application/json"},
                     body: JSON.stringify(leave)
                })
                const data = await reponse.json();
                setLeave(data);
                console.log("FETCH : ",data);
                alert("successfully send request...!");
            }
            catch(err)
            {
                console.error("ERROR ",err.message);
                console.log("error fail to fetch");

            }
        } 

  return (
    <div className='container'>
        <h2 className='text-center mt-2 mb-2'>Leave Request</h2>
        <div className='d-flex justify-content-center '>
      <form className='form-group mt-3 col-12 col-md-10 col-lg-6 border p-3' onSubmit={handlesubmit}>
        <div className='form-group mt-2'>
            <label>Name *</label>
            <input type='text' className='form-control mt-1' name='name' placeholder='Enter the name' value={leave.name} onChange={handleinputchange} />
        </div>
        <div className='form-group mt-2'>
            <label>Reason *</label>
            <input type='text' className='form-control mt-1' name="reason" placeholder='Enter the reason' value={leave.reason} onChange={handleinputchange} />
        </div>
        <div className='form-group mt-2'>
            <label>StartData *</label>
            <input type='text' className='form-control mt-1' name='startdate' placeholder='Enter the start date' value={leave.startdate} onChange={handleinputchange} />
        </div>
        <div className='form-group mt-2'>
            <label>EndDate *</label>
            <input type='text' className='form-control mt-1' name='enddate' placeholder='Enter the end date' value={leave.enddate} onChange={handleinputchange} />
        </div>
        <div className='mt-3 d-flex justify-content-center'>
             <button className='btn btn-outline-warning' type='submit'> send request</button>
        </div>
       
      </form>
    </div>
    <button className='btn btn-danger mt-3' onClick={handlepage}>go to profile page</button>
    </div>
  )
}
export default LeaveRequest
