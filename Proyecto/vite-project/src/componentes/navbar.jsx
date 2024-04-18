import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect } from 'react';

//import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'


function Nabvar({ setRutaActual }){

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
    
    
    return (
        <>
        <div className="nabvar-body" id="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
        <a className="navbar-brand" href="/">
            <img className="logotipo" src="../src/assets/img/logo.png" alt="" width="70" height="80" />
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
                    <a className="nav-text" aria-current="page" href="/" onClick={(e) => {e.preventDefault(); setRutaActual('/home')}}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-text" href="/login" onClick={(e) => {e.preventDefault(); setRutaActual('/login')}}>Iniciar Sesion</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-text" href="/carrito" onClick={(e) => {e.preventDefault(); setRutaActual('/carrito')}}>Carrito de compras</a>

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
        </>
      )
}
export default Nabvar;