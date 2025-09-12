import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Adminprofile() {
  const navigate = useNavigate();
  const [data,setData] = useState(
    {
      username:"",
      email:"",
      role:""
    }
  );

 
useEffect(()=>{
  async function harry(){

  try{
   const response= await fetch("http://localhost:8080/api/all",{
      method:"GET", 
      headers:{"content-type":"application/json"},
      //  body:json.stringif(data)
    })
    const info=await response.json();
    console.log(info);
    setData(info);
  }
  catch(err)
  {
    console.log("ERROR : ",err);

  }
}
harry();
},[]);

  return (
    <div className="text-center">
         <h6 className="mt-3">-- HR Dashboard --</h6>
      <h2>Welcome ,{data.username}</h2>
      <p><strong>Email:</strong></p>
      <p><strong>Role:</strong> </p>
       

      <button  className="btn btn-dark">
        Logout
      </button>
    </div>
  );
}

export default Adminprofile;
