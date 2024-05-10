import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Nabvar(){
    const location = useLocation()
    const userRol = localStorage.getItem('rol')
    const [searchItem, setSearchItem] = useState('')

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
        navigate("/home")
    }

    const handleLogin = () => {
      navigate("/login")
    }

    const handleCarrito = () => {
        navigate("/carrito")
    }

    const handleLogOut = () => {
        localStorage.removeItem('rol');
        alert('Sesión cerrada')
        navigate("/home")
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchItem.trim()) {
            navigate(`/home?search=${encodeURIComponent(searchItem)}`)
        } else {
            navigate("/home")
        }
    }

    return (
        <>
        {location.pathname!=='/login' && location.pathname!=='/signup'  && location.pathname!=='/carrito' &&(
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

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 textos">
                    <li className="nav-item">
                    <a className="nav-text" aria-current="page" href="/home" onClick={handleHome}>Home</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-text" href="/carrito"  onClick={handleCarrito}>Carrito de compras</a>
                    </li>
                </ul>
                <form className="d-flex buscar" role="search" onSubmit={handleSearch}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchItem} onChange={(e)=> setSearchItem(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 textos">
                {userRol === 'admin' && (
                        <li className="nav-item">
                            <button type="button" className="boton-admin"  onClick={handleLogOut}>cerrar sesión</button>
                        </li>
                    )
                    }
                    {userRol === null && (
                        <li className="nav-item">
                            <button type="button" className="boton-admin" onClick={handleLogin}>Iniciar Sesión</button>
                        </li>
                        )
                    }

                </ul>
                </div>
            </div>
            </nav>

        </div>

        )}


        </>
      )
}
export default Nabvar;