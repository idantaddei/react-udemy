import './App.css';
import './styles/course.css';

import CourseList from './components/CourseList';

import {useState} from "react";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
          <div className="App-header-item"/>
          <div className="App-header-item">
            <p>Udemy Clone</p>
          </div>
          <div className="App-header-item">
            <button onClick={() => {setIsAuth(!isAuth)}}>sign in</button>
          </div>
      </header>
        {isAuth && <CourseList />}
      <div className="App-body"></div>
    </div>
  );
};

export default App;
