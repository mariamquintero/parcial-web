import React from 'react';
import { useState } from "react"
import "../styles/AuthForm.css"
import users from '../users.json';

export function AuthForm({setUser}){

    const [usuario, setusuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
   
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const user = users.find(
          (u) => u.username === usuario && u.password === contraseña
        );
      
        if (!user) {
          setError(true);
          return;
        }
      
        setError(false);
        setUser([usuario]);

    }
      
    
    return (
        <section>
            <h1>Inicio de sesión</h1>
            <form
                className='formulario'
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    value={usuario}
                    placeholder="Usuario" 
                    onChange={e => setusuario(e.target.value)}
                
                />
                <input 
                    type="password"
                    placeholder="Contraseña" 
                    value={contraseña} 
                    onChange={e => setContraseña(e.target.value)}
                />
                <button type="submit">
                  Ingresar
                </button>
            </form>
            {error && <p className="error">Credenciales inválidas</p>}
        </section>
       
    );
}

export default AuthForm;