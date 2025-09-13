import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
function handlepage()
{
  navigate("/leaverequest");
}
function handlepage1()
{
  navigate("/employee");
}

function handlepage2()
{
       
  navigate("/dashboard");
}
  
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  if (!user) {
    return <h2>Please login first.</h2>;
  }

  return (
    <div className="container text-center border mt-5 mb-5">
         <h6 className="mt-3">-- Employee Dashboard --</h6>
      <h2>Welcome, {user.username} </h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <div className="d-flex justify-content-center ">
        <div className="col-12  col-lg-4 d-flex justify-content-center flex-column">
        <button className="btn btn-outline-danger mt-3" onClick={handlepage}>Leave Request</button>
      <button onClick={handlepage1}  className="btn btn-outline-info mt-3">
        create employee profile
      </button> 
       <button onClick={handlepage2}  className="btn btn-outline-success mt-3">
        Edit Employee Profile
      </button> <button onClick={handleLogout}  className="btn btn-outline-dark mt-3">
        Logout
      </button></div></div>
     
    </div>
  );
}

export default Profile;
