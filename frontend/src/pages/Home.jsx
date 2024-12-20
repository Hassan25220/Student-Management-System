import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('/students/')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    api.delete(`/students/${id}/`)
      .then(() => setStudents(students.filter(student => student.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1>Student List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/edit-student/${student.id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
