
import "./configuracion.css";
import React, {useState} from 'react'
import LeftNav from './leftNav';
import Account from "./Account/account.jsx";
import Help from "./help/help.jsx";


function Configuracion() {
    const [view, setView] = useState('account');

    const renderView = () => {
        switch (view) {
            case 'account':
                return <Account />;
            case 'help':
                return <Help />;
            default:
                return <Account />;
        }
    };

    return (
        <div className="containerConf">
            <div className="leftNav">
                <LeftNav setView={setView}/>
            </div>
            <div className="conten">
                {renderView()}
            </div>
        </div>
    )
}
export default Configuracion;