import './App.css';
import './styles/course.css';

import CourseList from './components/CourseList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Udemy Clone</p>
      </header>
      <CourseList />
      <div className="App-body"></div>
    </div>
  );
};

export default App;
