import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import NewPassword from './components/NewPassword';
import Register from './components/Register';

export const url = 'https://password-reset-flow-api.onrender.com'; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/adduser' element = {<Register/>}/>
      <Route path='/forgotpassword/:email' element = {<ForgotPassword/>}/>
      <Route path='/update-password/:randomString' element = {<NewPassword/>}/>
      <Route path='*' element = {<Navigate to ='/adduser'/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
