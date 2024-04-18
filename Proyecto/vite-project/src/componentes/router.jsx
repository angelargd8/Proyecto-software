import Login from './login.jsx'
import Home from './home.jsx'

function Router({ruta, setRutaActual}){
    switch(ruta){
        case "/home":
            return <Home></Home>
        case "/login":
            return <Login setRutaActual={setRutaActual}/>
        case "/":
            return <Home></Home>
        default:
            return (
                <h1>ruta actual {ruta}</h1>
            )
    }
}
export default Router;