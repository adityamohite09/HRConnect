import React, { useEffect } from 'react'
import { useState } from 'react';

  function Alluser() {
   const [vari,setVari] = useState([]);

useEffect(()=>
    async function hello()
    {
try{
    const reponse = await fetch("http://localhost:8080/api/all");
            const data = await reponse.json();
            console.log(data);

            setVari(data);

            console.log("all user fetch api",data);
}catch(err)
{
    console.log(err);
}
 hello();
    },
   
    []);
  return (
    <><h3 className='text-center mt-3 mb-3'>All User Table</h3>
    <div className='table-responsive'>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                <th>username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {vari.map((u)=>(
                    <tr key={u.id}>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.password}</td>
                        <td>{u.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
  }

export default Alluser
