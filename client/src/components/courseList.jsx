import React from 'react';
import CourseItem from './CourseItem';

const CourseList = ({ renderPage }) => {
  const courses = [
    {
      id: 0,
      name: 'my course #0',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 1,
      name: 'my course #1',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 2,
      name: 'my course #2',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 3,
      name: 'my course #3',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 4,
      name: 'my course #4',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 5,
      name: 'my course #5',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 6,
      name: 'my course #6',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
    {
      id: 7,
      name: 'my course #7',
      owner: 'david',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim illum ratione eos praesentium dolores veritatis, atque exercitationem vero doloribus temporibus qui mollitia facere repudiandae ut tenetur quis nemo possimus.',
    },
  ];

  return (
    <div className="Course-list">
      <ul>
        {courses.map(c => (
          <li>
            <CourseItem course={c} showPage={() => renderPage(c)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
