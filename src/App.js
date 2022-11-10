import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/Login';
import StudentList from './components/studentList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<StudentList/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/user' element={<h1>user</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
