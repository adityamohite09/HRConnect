import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  if (!user) {
    return <h2>Please login first.</h2>;
  }

  return (
    <div className="text-center">
         <h6 className="mt-3">-- Employee Dashboard --</h6>
      <h2>Welcome, {user.username} </h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>


      <button onClick={handleLogout}  className="btn btn-dark">
        Logout
      </button>
    </div>
  );
}

export default Profile;
