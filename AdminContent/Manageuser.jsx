import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Manageuser.css';
import AdminNav from './AdminNav';
import { handleDeleteUser } from '../../axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3380/LogInData');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await handleDeleteUser(id);
      setUsers(users.filter(users => users.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
        <div>
            <AdminNav/>
        </div>
    <div className="manage-users">
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageUsers;