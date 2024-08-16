import './agregarProd.css'
function AgregarProducto(){

    return(
        <>
        <div className="containerProduct">
            <div className="title">
                Agregar nuevo producto
            </div>
            <div className="formulario">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Nombre del producto</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Stock</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Página</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Promociones</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Imagen</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Categoría</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </form>
                
            </div>
        </div>
        </>
    )
}
export default AgregarProducto;