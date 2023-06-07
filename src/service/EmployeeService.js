import axios from "axios";
const base_URL='http://localhost:8080/employee/'

class EmployeeService
{
getAllEmployees()
{
    return axios.get(base_URL);
}

addEmployee(employee)
{
    return axios.post(base_URL,employee);
}
getEmployeeById(eid)
{
    return axios.get(`${base_URL}${eid}`)
}

updateEmployee(eid,employee)
{
    return axios.put(`${base_URL}${eid}`,employee);
}

deleteEmployee(eid)
{
    return axios.delete(`${base_URL}${eid}`)
}
}
export default new EmployeeService();