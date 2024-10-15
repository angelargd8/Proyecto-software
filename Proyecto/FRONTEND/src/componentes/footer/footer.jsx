import './footer.css';
import React from 'react'

function Footer(){
    return(
        <div className="Container-footer">
            <div className="footer-content">
                <hr></hr>
                
                <div className="RowContainer">
                    <div className="ColumnContainer">
                        <h2 className="footer-text">Picolin</h2>
                        <p className="footer-text">Teléfono: 1234567890</p>
                        <p className="footer-text">Correo: picolinescolor@gmail.com</p>
                    </div>
                    <div className="ColumnContainer">
                        <h2 className="footer-text">Más informacion</h2>
                        <p className="footer-text">Home</p>
                        <p className="footer-text"></p>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-content">
                    <p className="footer-text">Copyright© Picolin, 2024. Derechos reservados</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;