import './App.css';
import './styles/course.css';

import { useState } from 'react';
import CourseList from './components/CourseList';
import CoursePage from './components/CoursePage';
const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(undefined);

  return (
    <div className="App">
      <header className="App-header">
        <p>Udemy Clone</p>
      </header>
      {selectedCourse ? (
        <CoursePage
          course={selectedCourse}
          exitPage={() => setSelectedCourse(undefined)}
        />
      ) : (
        <CourseList renderPage={setSelectedCourse} />
      )}
      <div className="App-body"></div>
    </div>
  );
};

export default App;
