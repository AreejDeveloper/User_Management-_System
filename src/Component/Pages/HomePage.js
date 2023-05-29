import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function HomePage() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUsers(response.data.reverse());
    console.log(response.data);
  }
  const deleteUser = async (userId)=> 
  {
    await axios.delete(`http://localhost:5000/user/${userId}`);
    getAllUsers();
  }
  return (
    <div className='container'>
     <h1 className='py-3'>User Management System</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          users.map((user,index)=>(
            <tr key={index}>  
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/users/view/${user.id}`}  className='btn btn-info me-2'>View</Link>
                  <Link to={`/users/edit/${user.id}`} className='btn btn-outline-info me-2'>Edit</Link>
                  <Button variant ="danger" onClick={ () => deleteUser(user.id) }>Delete</Button>
                </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage