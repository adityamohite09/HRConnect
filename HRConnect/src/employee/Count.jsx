import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState();

  useEffect(()=>{
  async function Hyd ()
  {
    try{
    console.log("inside hyd function");
    let data = await fetch("http://localhost:8080/api/count",{
                  method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        let pass = await data.text();
        setCount(pass);
        console.log(pass);
    }
    catch(err)
    {
        console.log("error");
    }
  }
  Hyd();
},[])

  return (
    <div>
      <h3>Total Employees: {count}</h3>
    </div>
  );
}

export default Count;
