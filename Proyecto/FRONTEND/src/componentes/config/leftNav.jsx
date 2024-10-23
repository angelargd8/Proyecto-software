
import './leftNav.css';
import React from 'react'

function LeftNav({setView}){

    return(
        <div className="containerNav">
            <div className="content">
                <ul className="containerList">
                    <li onClick = {() => setView('account')}>Tu cuenta</li>
                    <li onClick = {() => setView('privacy')}>Privacidad y seguridad</li>
                    <li onClick = {() => setView('help')}>Ayuda</li>
                    {/* <li onClick = {() => setView('settings')}>Configuración</li> */}
                    
                </ul>
            </div>

        </div>
    )
}

export default LeftNav;