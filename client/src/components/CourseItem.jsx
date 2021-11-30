import React from 'react';

function CourseItem({ course, showPage }) {
  return (
    <div className="Course-item" onClick={() => showPage()}>
      <p>{course.name} </p>
      <p>by: {course.owner}</p>
    </div>
  );
}

export default CourseItem;
