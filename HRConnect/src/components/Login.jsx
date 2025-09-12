import React, { useState } from "react";
 import {useNavigate} from "react-router-dom"
function Login() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data : ",data);
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data));
        if(data.role == "hr")
        {
          navi("/dashboard")
        }
        else
        {
          navi("/profile")
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container mt-3 mb-2   d-flex justify-content-center ">
      <div className=' col-12 border col-md-10 col-lg-6 p-2'>
      <h2 className="text-center mt-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label>Email:</label>
          <input 
            type="email" className="form-control" placeholder="enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group mt-2">
          <label>Password:</label>
          <input 
            type="password" className="form-control" placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-success">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
