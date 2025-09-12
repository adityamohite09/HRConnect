import React, { useEffect, useState } from 'react' 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";  
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    
    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        const fetchEmployees = async()=>{
        try{
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();
        console.log("API response : ",data);
        setEmployees(data);
        }catch(error)
        {
            console.error("error fetching employee :",error.message);
        }
    }
    fetchEmployees();

    },[]);


    const handledelete =async (empid)=>{
        try{
            const response = await fetch(`http://localhost:8080/api/employee/${empid}`,
               { method:"DELETE",}
            );
       
            if (response.ok) {
      console.log("Employee deleted successfully!");
      setEmployees(employees.filter(emp => emp.id !== empid)); // update UI
    } else {
      console.error("Failed to delete employee");
    }
        }catch(error)
        {
            console.error("error deleting employee",error.message);
        }
    }


    const handleupdate = (empid) => {
  navigate(`/employee/${empid}`);
};

  return (
    <>
      <Container className="mt-5">
        <Row>
            <Col>
            <h1 className='text-center'>Employees</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=>(
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.department}</td>
                            <td><Button variant="outline-secondary" onClick={()=>handleupdate(employee.id)}>Update</Button>{" "} <Button variant="outline-danger"onClick={() => handledelete(employee.id)}
 >Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
