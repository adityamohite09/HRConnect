import React, { useState } from 'react'
import "./PostUser.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
function PostUSer() {
            const navigate = useNavigate();
    const [formdata, setFormData] = useState({
        name: "",
        email : "",
        phone : "",
        department:""
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
            const response = await fetch("http://localhost:8080/api/employee",{
                method : "POST",
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(formdata)
            });

            const data = await response.json();
            console.log("Employee create :",data);

            navigate("/")

        }catch(error)
        {
            console.log("error creating employee : ",error.message);
        }
    }
  return (
    <div className='container'>
      <h3 className='text-center mt-3'>Post New Employee</h3>
      <Form className='form-group mt-3' onSubmit={handlesubmit}>
        <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Name *</label>
            <Form.Control type="text"  className="form-control" name="name" placeholder="Enter the Name" value={formdata.name} onChange={handleinputchange}></Form.Control>
        </Form.Group>

         <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Email *</label>
            <Form.Control type="email" name="email" className="form-control" placeholder="Enter the email" value={formdata.email} onChange={handleinputchange}></Form.Control>
        </Form.Group>

         <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Phone *</label>
            <Form.Control type="text" name="phone" className="form-control" placeholder="Enter the phone" value={formdata.phone} onChange={handleinputchange}></Form.Control>
        </Form.Group>

         <Form.Group controlId="formbasicname" className='form-group mt-2'>
                      <label> Department *</label>
            <Form.Control type="text" name="department" className="form-control" placeholder="Enter the department" value={formdata.department} onChange={handleinputchange}></Form.Control>
        </Form.Group>

        <Button className="w-100 mt-3" type="submit" variant="primary">Post Employee</Button>
      </Form>
    </div>
  )
}

export default PostUSer
