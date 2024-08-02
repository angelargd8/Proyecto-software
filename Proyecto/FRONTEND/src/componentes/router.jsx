import { Routes, Route } from 'react-router-dom';
import Login from './log/login.jsx'
import Home from './home/home.jsx'
import SingUp from './log/signup.jsx'
import Carrito from './carrito/carrito.jsx'
import AgregarProducto from './admin/agregarProd.jsx'
import EditarProds from './admin/editarProd.jsx';
import EditarCateg from './admin/editarCateg.jsx';
import Pago from './carrito/pago.jsx';
import Products from './products/products.jsx';

function AppRouter(){

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pago" element = {<Pago />}/>
            <Route path="/" element={<Home />} />
            <Route path="/agregarProducto" element={<AgregarProducto/>} />
            <Route path="/editarCategorias" element={<EditarCateg/>} />
            <Route path='/detalles/:detail' element={<Products />} />
            <Route path='/editarProductos' element={<EditarProds/>}/>
        </Routes>
    )
    
}
export default AppRouter;