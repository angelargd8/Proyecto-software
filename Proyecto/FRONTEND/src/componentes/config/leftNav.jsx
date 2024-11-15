
import './leftNav.css';
import React from 'react'

function LeftNav({setView}){

    return(
        <div className="containerNav">
            <div className="content">
                <ul className="containerList">
                    <li onClick = {() => setView('account')}>Tu cuenta</li>
                    <li onClick = {() => setView('help')}>Ayuda</li>
                    
                </ul>
            </div>

        </div>
    )
}

export default LeftNav;