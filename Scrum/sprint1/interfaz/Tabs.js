function Tabs() {
    const handleTabClick = (tabName) => {
        switch (tabName) {
            case 'Menú Principal':
                window.location.href = '/menu_principal';
                break;
            case 'Proyección de gastos':
                window.location.href = '/proyeccion_gastos';
                break;
            case 'Proyección de ventas':
                window.location.href = '/proyeccion_ventas';
                break;
            case 'Generación tarifario':
                window.location.href = '/generacion_tarifario';
                break;
            case 'Comparativa':
                window.location.href = '/comparativa';
                break;
            case 'Presupuesto':
                window.location.href = '/presupuesto';
                break;
            case 'Ingreso de datos':
                window.location.href = '/ingreso_datos';
                break;
            case 'Consulta de datos':
                window.location.href = '/consulta_datos';
                break;
            default:
                break;
        }
    };

    return (
        <div id='tabs' style={{
            height: '10vh',
            width: '100%',
            backgroundColor: '#b9b9b9',
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
        }}>
            <TabItem tabName='Menú Principal' onClick={() => handleTabClick('Menú Principal')} />
            <TabItem tabName='Proyección de gastos' onClick={() => handleTabClick('Proyección de gastos')} />
            <TabItem tabName='Proyección de ventas' onClick={() => handleTabClick('Proyección de ventas')} />
            <TabItem tabName='Generación tarifario' onClick={() => handleTabClick('Generación tarifario')} />
            <TabItem tabName='Comparativa' onClick={() => handleTabClick('Comparativa')} />
            <TabItem tabName='Presupuesto' onClick={() => handleTabClick('Presupuesto')} />
            <TabItem tabName='Ingreso de datos' onClick={() => handleTabClick('Ingreso de datos')} />
            <TabItem tabName='Consulta de datos' onClick={() => handleTabClick('Consulta de datos')} />
        </div>
    );
}

function TabItem({ tabName, onClick }) {
    return (
        <div style={{
            cursor: 'pointer',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }} onClick={onClick}>
            <p>{tabName}</p>
        </div>
    );
}