
import React from 'react';
import "../styles/Style.css";
import { Outlet, Link, useLocation } from 'react-router-dom';


export function Misvis({user, setUser}) {

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
                        <li className={location.pathname === '/Misvis' ? 'active' : '/Misvis'}>
                            <Link to="/Misvis">Misión y visión</Link>
                        </li>
                        <li>
                            <Link to="/Perfil">Perfil</Link>
                        </li>
                       
                        <li><button>
                        <Link to="/Login">Cerrar sesión</Link>
                            </button></li>
                    </ul>
                </nav>
                <Outlet/>
            </header>

            <main>
                <div className="company-info"> 
                    <h2>Nuestra Misión:</h2>
                    <p>En TechZone, nos esforzamos por ofrecer productos tecnológicos de calidad que mejoren la vida de nuestros clientes y les brinden experiencias únicas.</p>
                    </div>
            </main>
        </div>
    )
}

export default Misvis;