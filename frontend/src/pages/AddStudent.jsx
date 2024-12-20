import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import StudentForm from '../components/StudentForm';

const AddStudent = () => {
  const navigate = useNavigate();

  const handleAdd = async (newStudent) => {
    try {
      await api.post('/students/', newStudent);
      navigate('/'); // Redirect to home after successful addition
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <StudentForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddStudent;
