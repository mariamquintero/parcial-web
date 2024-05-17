import React from 'react';
import "../styles/Style.css";
import { Outlet, Link, useLocation } from 'react-router-dom';


export function Home({user, setUser}) {
   

    const location = useLocation();

    return(
        
        <div className="home-container">
            {/* menu - header */}
            <header>
                <nav>
                    <ul>
                        <li className={location.pathname === '/Inicio' ? 'active' : '/Inicio'}>
                            <Link to="/Inicio">Inicio</Link>
                        </li>
                        <li>
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
            
            {/* contenido */}
            <main>
                <div className="company-info">
                    <h1>Bienvenido a TechZone</h1>
                    <p>Somos una empresa líder en tecnología, ofreciendo una amplia gama de productos innovadores para satisfacer tus necesidades tecnológicas.</p>
                    <h2>Nuestros Productos Destacados:</h2>
                    <ul>
                        <li>Smartphones de última generación con tecnología avanzada.</li>
                        <li>Laptops y computadoras potentes para trabajo y entretenimiento.</li>
                        <li>Gadgets y accesorios tecnológicos para facilitar tu vida diaria.</li>
                        <li>Dispositivos inteligentes para el hogar que hacen tu vida más cómoda y segura.</li>
                    </ul>
                    <h2>Contacto:</h2>
                    <p>Si deseas más información sobre nuestros productos o servicios, contáctanos a través de nuestro sitio web o visítanos en nuestras tiendas.</p>
                </div>
            </main>


        </div>
    )
}

export default Home;