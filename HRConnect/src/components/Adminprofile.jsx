import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Adminprofile() {
  const navigate = useNavigate();

  function handlepage()
  {
    navigate("/alluser");
  }
  function handlepage1()
  {
    navigate("/dashboard");
  }
  function handlepage2()
  {
    navigate("/fetchrequest");
  }
   function handlepage3()
  {
    navigate("/count");
  }

    const user = JSON.parse(localStorage.getItem("user"));
 const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };
  return (
    <div className="text-center">
         <h6 className="mt-3">-- HR Dashboard --</h6>
      <h2>Welcome ,{user.username}</h2>
      <p><strong>Email:</strong>{user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
       <section className="d-flex justify-content-center">
<div className="d-flex flex-column col-lg-4">
      <button  className="btn btn-outline-danger mt-3" onClick={handleLogout}>
        Logout
      </button>

      <button  className="btn btn-outline-warning mt-3" onClick={handlepage}>
        All Employee
      </button>

      <button  className="btn btn-outline-primary mt-3" onClick={handlepage1}>
        Edit Employee
      </button>

      <button  className="btn btn-outline-secondary mt-3" onClick={handlepage2}>
        Leave Request see
      </button>

      <button  className="btn btn-outline-secondary mt-3" onClick={handlepage3}>
        Count All Empolyee
      </button>
      </div>
      </section>
    </div>
  );
}

export default Adminprofile;
