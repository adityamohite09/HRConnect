import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
function Registration() {
    const navigate = useNavigate();
    const [formdata, setFormData] = useState({
        username: "",
        email : "",
        password : "",
        role : "",
    });

    const handleinputchange = (event) => {
        const {name,value} = event.target;
        setFormData({...formdata,[name]:value,})
    };

    const handlesubmit = async (e)=>{
        e.preventDefault();

        console.log(formdata);
        try
        {
            const response = await fetch("http://localhost:8080/api/register",{
                method : "POST",
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(formdata)
            });

            const data = await response.json();
            console.log("User create data:",data);

            alert("successfully register User..!");

        }catch(error)
        {
            console.log("error creating employee : ",error.message);
              alert("please try again not register User..!");
        }
    }

  return (
    <div className='container  mt-3 mb-3 '>
      <h3 className='text-center mt-3'>Registration Form</h3>
      <div className='d-flex justify-content-center '>
      <Form className='form-group mt-3 col-12 col-md-10 col-lg-6 border p-3' onSubmit={handlesubmit}>
        <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Name *</label>
            <Form.Control type="text"  className="form-control" name="username" placeholder="Enter the Name" value={formdata.name} onChange={handleinputchange}></Form.Control>
        </Form.Group>

         <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Email *</label>
            <Form.Control type="email" name="email" className="form-control" placeholder="Enter the email" value={formdata.email} onChange={handleinputchange}></Form.Control>
        </Form.Group>

         <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> password *</label>
            <Form.Control type="password" name="password" className="form-control" placeholder="Enter the password" value={formdata.password} onChange={handleinputchange}></Form.Control>
        </Form.Group>

          <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Role *</label>
                     
             <Form.Control type="text" name="role" className="form-control" placeholder="Enter employee or hr as your role" value={formdata.role} onChange={handleinputchange}></Form.Control> 
        </Form.Group>

        <Button className="w-100 mt-3 mb-3" type="submit" variant="primary">Register Now</Button>
      </Form>
      </div>
    </div>
  )
}

export default Registration

