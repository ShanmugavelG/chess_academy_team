import React, { useState, useContext, useEffect } from 'react';
import { CourseContext } from '../Couses/CourseContext';
import { getCourses, addCourse, deleteCourse } from '../../axios'; // Import axios functions
import { Button } from '@mui/material';
import AdminNav from './AdminNav';
import './ManageCourses.css'; // Import CSS file

const ManageCourses = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [errors, setErrors] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [setCourses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (newCourse.title.trim() === '') {
      errors.title = 'Course title is required';
      isValid = false;
    }

    if (newCourse.description.trim() === '') {
      errors.description = 'Course description is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleAddCourse = async () => {
    if (!validate()) {
      return;
    }

    try {
      const response = await addCourse(newCourse);
      setCourses([...courses, response.data]);
      setNewCourse({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
      
      <div>
        <div>
        <AdminNav />
        </div>
    <div className="manage-courses-container">
      <div className="manage-courses-background"></div>
      <h1>Manage Courses</h1>
      <div className="manage-courses-form">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}
        <input
          type="text"
          name="description"
          placeholder="Course Description"
          value={newCourse.description}
          onChange={handleChange}
          />
        {errors.description && <p className="error">{errors.description}</p>}
        <Button onClick={handleAddCourse}>Add Course</Button>
      </div>
      <ul className="course-list">
        {courses.map((course) => (
            <li key={course.id}>
            {course.title}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteCourse(course.id)}
              >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ManageCourses;
