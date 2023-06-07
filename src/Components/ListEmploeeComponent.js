import React, { useEffect } from 'react';
import { useState} from 'react';
import Table from 'react-bootstrap/Table';
import EmployeeService from '../service/EmployeeService';
import { Link } from 'react-router-dom';
function ListEmploeeComponent(props) {
    useEffect(()=>
    {
     getAllEmployees();  
    },[])
    const getAllEmployees=()=>
    {
        EmployeeService.getAllEmployees().then((res)=>
        {
            setEmployee(res.data)
            console.warn(res.data);
        })
    }

const [Employees,setEmployee]=useState([]);
const DeleteEmployee=(eid) =>
{
    EmployeeService.deleteEmployee(eid).then((res)=>
    {
        console.log(res.data)
        getAllEmployees();  
    })
}

    return (
        <div className='emploee'>
            <h2 className='text-center mt-3 mb-3'>Employee Details</h2>
            <Link to="/add-employee" className="btn btn-success mb-4 ml-2">Add Employee</Link>
        <Table striped bordered hover>
        <thead>
          <tr className='text-center'>
            <th>Employee Id</th>
            <th>Employee FirstName</th>
            <th>Employee LastName</th>
            <th>Employee E-Mail</th>
            <th>Employee Department</th>
            <th>Employee Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
             Employees.map(employee =>
                <tr key={employee.id} className='text-center'>
                    <td>{employee.id}</td>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>{employee.salary}</td>
                    <td>
                   <div className="text-center">
                   <Link to={`/edit-employee/${employee.id}`} variant="warning" style={{marginRight:10}} className='btn btn-primary'  >Update</Link>
                    <Link onClick={() =>DeleteEmployee(employee.id)} variant="danger" className='btn btn-danger' >Delete</Link>
                   </div>
                    </td>
                </tr>
             )
        }
         
        </tbody>
      </Table>

            
        </div>
    );
}

export default ListEmploeeComponent;