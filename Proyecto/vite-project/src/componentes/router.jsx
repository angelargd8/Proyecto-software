import Login from './login.jsx'
import Home from './home.jsx'
import SingUp from './signup.jsx'
// //import Carrito from './carrito.jsx'

function Router({ruta, setRutaActual}){
    switch(ruta){
        case "/home":
            return <Home></Home>
        case "/login":
            return <Login setRutaActual={setRutaActual}/>
        case "/signup":
                return <SingUp setRutaActual={setRutaActual}/>
        // case "/carrito":
        //         return <Carrito setRutaActual={setRutaActual}/>
        case "/":
            return <Home></Home>
        default:
            return (
                <h1>ruta actual {ruta}</h1>
            )
    }
}
export default Router;