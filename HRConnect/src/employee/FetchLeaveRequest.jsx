import React, { useEffect, useState } from 'react'

function FetchLeaveRequest() {

    const[leave,setLeave] = useState([]);
    
    useEffect(()=>{
        const fetchfunc = async()=>{
            try{
                const reponse = await fetch("http://localhost:8080/api/getreq",{
                    method:"GET",
                    headers:{"content-type":"application/json"},
                    // body: JSON.stringify(leave)
                })
                const data = await reponse.json();
                setLeave(data);
                console.log("FETCH : ",data);
            }
            catch(err)
            {
                console.error("ERROR ",err.message);
                console.log("error fail to fetch");

            }
        } 
        fetchfunc();
    },[]
    )
  return (
    <section className='container'>
    <div className='table-responsive'>
        
           <h3 className='text-center mt-3'>See All Employee Leave Request</h3>
                <table className='table table-striped table-bordered mt-4'>
                    <thead>
                        <tr>
                            <th>Name</th>
                        <th>reson</th>
                        <th>startdate</th>
                        <th>enddate</th>
                        </tr>
                    </thead>
                    <tbody>
                        { leave.map((lea)=>(
                        <tr key={lea.id}>
                            <td>{lea.name}</td>
                            <td>{lea.reason}</td>
                            <td>{lea.startdate}</td>
                             <td>{lea.enddate}</td>
                              
                        </tr>
                        ))}
                    </tbody>
                </table>
    </div>
    </section>
  )
}


export default FetchLeaveRequest