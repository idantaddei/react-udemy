import './App.css';
import './styles/course.css';
import courseList from './components/courseList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Udemy Clone</p>
      </header>
      <div className="App-body">
        <courseList />
      </div>
    </div>
  );
}

export default App;
