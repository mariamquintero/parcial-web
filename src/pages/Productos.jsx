
import React from 'react';
import "../styles/Style.css";
import { Outlet, Link, useLocation } from 'react-router-dom';
import imagenPortatil from '../images/portatil.jpg';
import imagenParlante from '../images/parlante.jpg';
import imagenSillaGamer from '../images/sillagamer.jpg';


export function Productos({user, setUser}) {
    

    const location = useLocation();

    return(
        <div className="home-container">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Inicio">Inicio</Link>
                        </li>
                        <li className={location.pathname === '/Productos' ? 'active' : '/Productos'}>
                            <Link to="/Productos">Productos</Link>
                        </li>
                        <li>
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
                <div className="welcome-section">
                    <h1>Productos</h1>
                    <div className="product-grid">
                        <div class="product-item">
                            <img src={imagenPortatil} alt="Portatil" />
                            <h3>Portátil</h3>
                            <p>Precio: $3,000,000 COP</p>
                            <p>Descripción: Laptop de última generación con procesador rápido y pantalla de alta resolución.</p>
                        </div>
                        <div class="product-item">
                            <img src={imagenParlante} alt="Parlante" />
                            <h3>Parlante</h3>
                            <p>Precio: $150,000 COP</p>
                            <p>Descripción: Parlante Bluetooth con sonido envolvente y diseño elegante.</p>
                        </div>
                        <div class="product-item">
                            <img src={imagenSillaGamer} alt="Silla Gamer" />
                            <h3>Silla Gamer</h3>
                            <p>Precio: $600,000 COP</p>
                            <p>Descripción: Silla ergonómica para gamers con soporte lumbar y reposabrazos ajustables.</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Productos;