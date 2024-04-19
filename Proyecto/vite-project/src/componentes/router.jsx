import { Routes, Route } from 'react-router-dom';
import Login from './login.jsx'
import Home from './home.jsx'
import SingUp from './signup.jsx'
import Detalles from './detalles.jsx'
import Carrito from './carrito.jsx'

function AppRouter(){

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/detalles/:title" element={<Detalles/>} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
    
}
export default AppRouter;