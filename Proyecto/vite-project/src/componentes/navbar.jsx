import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


//import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'


function Nabvar(){
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            var navbar = document.getElementById('navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //navegacion
    const navigate = useNavigate();

    const handleHome = () => {
        // aqui va a ir lo de la autentificacion y todo eso
        navigate("/home");
    };

    const handleLogin = () => {
      navigate("/login");
    };
    

    const handleCarrito = () => {
        navigate("/carrito");
      };

    const handleDetalles = () => {
        navigate("/detalles");
      };
    
    return (
        <>
        {
            location.pathname!=='/login' && location.pathname!=='/signup' && (
                <div className="nabvar-body" id="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
        <a className="navbar-brand" href="/">
            <img className="logotipo" src="../src/assets/img/logo.png" alt="" width="60" height="70" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
            <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
            <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block'}}></span>
        </button>
            <div className="container-fluid">                 

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-text" aria-current="page" href="/" onClick={handleHome}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-text" href="/login" onClick={handleLogin}>Iniciar Sesion</a>
                    </li>

                    {/*------------ Esto es solo para probar mi pantalla, cuando ya existan las cards de productos hay que quitarlo ------------*/}
                    <li className="nav-item">
                    <a className="nav-text" href="/detalles" onClick={(e) => {e.preventDefault(); setRutaActual('/detalles')}}>Detalles</a>
                    </li>
                    {/*-------------------------------------------------------------------------------------------------------------------------*/}

                     <li className="nav-item">
                    <a className="nav-text" href="/carrito"  onClick={handleCarrito}>Carrito de compras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-text" href="/detalles" onClick={handleDetalles}>Detalles</a>
                    </li>
                    
                </ul>
                <form className="d-flex buscar" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
            </nav>

        </div>

        )}

        
        </>
      )
}
export default Nabvar;