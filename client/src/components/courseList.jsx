import React from 'react';
import CourseItem from './CourseItem';

const CourseList = () => {
  const courses = [
    { id: 0, name: 'my course #0', owner: 'david' },
    { id: 1, name: 'my course #1', owner: 'david' },
    { id: 2, name: 'my course #2', owner: 'david' },
    { id: 3, name: 'my course #3', owner: 'david' },
    { id: 4, name: 'my course #4', owner: 'david' },
    { id: 5, name: 'my course #5', owner: 'david' },
    { id: 6, name: 'my course #6', owner: 'david' },
    { id: 7, name: 'my course #7', owner: 'david' },
  ];

  return (
    <div className="Course-list">
      <ul>
        {courses.map(c => (
          <li>
            <CourseItem course={c} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
