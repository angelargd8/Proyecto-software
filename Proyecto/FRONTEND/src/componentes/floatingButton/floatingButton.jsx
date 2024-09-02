import './floatingButton.css';
function FloatingButton() {

   const handleClick = () =>{
        window.open('https://wa.me/50237067222', '_blank');
   } 

    return (
    <div className="floatingButton-body">
        
        <div className="floatingButton">
        <button type="submit" onClick={handleClick} id='boton-whatsapp' className="imagen-btn-whatsapp">
            <div className="imagen">
                <img className="imagen-whatsapp" src="./src/assets/img/whatsapp.png" alt="whatsapp" />
            </div>
            
        </button>
    </div>

    </div>

    );

}

export default FloatingButton;