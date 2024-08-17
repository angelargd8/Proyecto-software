import { Navigate, useNavigate } from 'react-router-dom'
import './resumen.css'

const Resumen = () => {
    const navigate = useNavigate()
    
    const handleRegresar = () => {
        navigate("/pago")
    }

    return (
        <>
        <div className="contenedorResumen">
            <div className="header">
                <div className="BtnRegresar" onClick={() => handleRegresar()}>&lt; </div>
                <div className="title"> Confirma tu Pedido </div>
                <div className="menu">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
                        <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
                        <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block'}}></span>
                    </button>
                </div>
            </div>
            <div className="body">
                <div className="sector">
                    <div className="subtitle">Destino </div>
                    <div className="content">
                        <div className="ubicacionRes">
                            <div className="map"></div>
                            <div className="UbiName"> Universidad del Valle de Guatemala</div>
                        </div>
                        <div className="deliveryTimeRes">
                            <div className="DeliveryImg"></div>
                            <div className="DeliveryTxt"> Delivery 30-45 min</div>
                        </div>
                    </div>
                </div>
                <div className="sector">
                    <div className="subtitle">Propoina</div>
                    <div className="content"></div>
                </div>
                <div className="sector">
                    <div className="subtitle"> Total</div>
                    <div className="content"></div>
                </div>
            </div>
            <div className="footer">
                <div className="btnConfirm">Confirmar</div>
            </div>
        </div>
        </>
    )

}

export default Resumen