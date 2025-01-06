import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ListEvent.css';

function ListEvent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <a className="back-link" href="/">Back to Home</a>
      <h1 className="title">All Users</h1>
      <div className="users">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="user-card">
              <div className="user-image">
                <img src={user.image} alt="User" />
              </div>
              <h3 className="user-name">{user.name}</h3>
              <h5 className="user-email">{user.email}</h5>
              <div className="actions">
                <a className="edit-link" href={`/edit/${user._id}`}>Edit </a>
                <a className="delete-link" href={`/delete/${user._id}`}>Read more</a>
              </div>
            </div>
          ))
        ) : (
          <h3 className="no-users">No Users Yet</h3>
        )}
      </div>
    </div>
  );
}

export default ListEvent;
