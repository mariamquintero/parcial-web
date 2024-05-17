
import React from 'react';
import "../styles/Style.css";
import { Outlet, Link, useLocation } from 'react-router-dom';
import imagenPerfil from '../images/perfil.jpg';



export function Perfil({user, setUser}) {
   

    const location = useLocation();

    return(
        <div className="home-container">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Inicio">Inicio</Link>
                        </li>
                       
                        <li>
                            <Link to="/Productos">Productos</Link>
                        </li>
                       
                        <li>
                            <Link to="/Misvis">Misión y visión</Link>
                        </li>
                        <li className={location.pathname === '/Perfil' ? 'active' : '/Perfil'}>
                            <Link to="/Perfil">Perfil</Link>
                        </li>
                       
                        <li><button>
                        <Link to="/Login">Cerrar sesión</Link>
                            </button></li>                    </ul>
                </nav>
                <Outlet/>
            </header>

            <main>
                <div className="profile-section">
                    <h1>Perfil de Usuario</h1>
                    <div className="profile-info">
                        <div className="profile-image">
                            <img src={imagenPerfil} alt="Perfil" />
                        </div>
                        <div className="user-details">
                            <h3>Nombre: Mariam</h3>
                            <h3>Apellidos: Quintero</h3>
                            <p>Usuario: admin</p>
                            <p>Contraseña: *****</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Perfil;