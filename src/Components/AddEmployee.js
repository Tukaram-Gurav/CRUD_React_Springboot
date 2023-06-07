import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

function AddEmployee(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();
    const { eid } = useParams();
    const saveorUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstname, lastname, department, email, salary }
        if (eid) {
            EmployeeService.updateEmployee(eid,employee).then((res) => {
                navigate('/employee');
            }).catch(error => {
                console.warn(error);
            })
        }
        else {
            EmployeeService.addEmployee(employee).then((res) => {
                navigate('/employee');
            }).catch(error => {
                console.warn(error);
            })
        }
    }
    useEffect(() => {
        EmployeeService.getEmployeeById(eid).then((res) => {
            setFirstname(res.data.firstname);
            setLastname(res.data.lastname);
            setDepartment(res.data.department);
            setEmail(res.data.email);
            setSalary(res.data.salary);
        }).catch(error => {
            console.warn(error);
        })
    }, [])
    const title = () => {
        if (eid) {
            return <h2 className='text-center'>Edit Employee</h2>
        }
        else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {title()}
                    <div className="card-body">
                        <form>

                            {/* First Name */}
                            <div className="form-group mb-2">
                                <label className='form-label'>First Name</label>
                                <input type="text"
                                    name="firstname"
                                    placeholder='Enter Firstname'
                                    value={firstname}
                                    className='form-control'
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>

                            {/* last Name */}
                            <div className="form-group mb-2">
                                <label className='form-label'>Last Name</label>
                                <input type="text"
                                    name="lastname"
                                    placeholder='Enter Lastname'
                                    value={lastname}
                                    className='form-control'
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>

                            {/* Department*/}
                            <div className="form-group mb-2">
                                <label className='form-label'>Department</label>
                                <input type="text"
                                    name="department"
                                    placeholder='Enter Department'
                                    value={department}
                                    className='form-control'
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </div>

                            {/* E-mail */}
                            <div className="form-group mb-2">
                                <label className='form-label'>E-mail</label>
                                <input type="text"
                                    name="email"
                                    placeholder='Enter E-mail'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* salary */}
                            <div className="form-group mb-2">
                                <label className='form-label'>Salary</label>
                                <input type="text"
                                    name="salary"
                                    placeholder='Enter Salary'
                                    value={salary}
                                    className='form-control'
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>
                            <div className="text-center">
                                <button className='btn btn-primary' style={{ marginRight: 10 }} onClick={(e) => saveorUpdateEmployee(e)}>submit</button>
                                <Link to='/employee' className='btn btn-danger'>cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddEmployee;