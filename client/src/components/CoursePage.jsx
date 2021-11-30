import React from 'react';

function CoursePage({ course, exitPage }) {
  return (
    <div className="Course-page">
      <h1>
        {course.name} ~ {course.owner}
      </h1>
      <p>{course.description}</p>
      <button onClick={() => exitPage()}>Exit</button>
    </div>
  );
}

export default CoursePage;
