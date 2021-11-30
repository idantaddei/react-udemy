import React from 'react';

function CourseItem({ course }) {
  return (
    <div className="Course-item">
      <p>{course.name} </p>
      <p>by: {course.owner}</p>
    </div>
  );
}

export default CourseItem;
