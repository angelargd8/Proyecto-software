
import "./configuracion.css";
import React from 'react'
import LeftNav from './leftNav';
import Account from "./account";

function Configuracion() {
    return (
        <div className="containerConf">
            <div className="leftNav">
                <LeftNav/>
            </div>
            <div className="conten">
                <Account/>
            </div>
        </div>
    )
}
export default Configuracion;