
import './App.css';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom' ;
import AuthForm from './pages/AuthForm'
import  Home  from "./pages/Home";
import  Productos  from "./pages/Productos";
import  Misvis  from "./pages/Misvis";
import  Perfil  from "./pages/Perfil";

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">
     <Routes>
         
        <Route path='/' element= {
            !user.length > 0
            ? <AuthForm setUser={setUser} />
            : <Home user={user} setUser={setUser}/> 
          } />
         
        <Route path='/Login' element={<AuthForm user={user} setUser={setUser}/>} />
        <Route path='/Inicio' element={<Home user={user} setUser={setUser}/>} />
        <Route path='/Productos' element={<Productos user={user} setUser={setUser}/>} />
        <Route path='/Misvis' element={<Misvis user={user} setUser={setUser}/>} />
        <Route path='/Perfil' element={<Perfil user={user} setUser={setUser}/>} />
          
        {/* <Route path='/' element= {
            !user.length > 0
            ? <AuthForm setUser={setUser} />
            : <Home user={user} setUser={setUser}/> 
          } 
        ></Route> */}
      
     </Routes>
    </div>
  );
}

export default App;
