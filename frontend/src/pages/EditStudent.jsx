import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import StudentForm from '../components/StudentForm';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await api.get(`/students/${id}/`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    fetchStudent();
  }, [id]);

  const handleUpdate = async (updatedStudent) => {
    try {
      await api.put(`/students/${id}/`, updatedStudent);
      navigate('/'); // Redirect to home after successful update
    } catch (error) {
      console.error('Error updating student:', error);
      alert("Failed to update student. Please try again")
    }
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
      {student ? (
        <StudentForm initialValues={student} onSubmit={handleUpdate} />
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default EditStudent;
