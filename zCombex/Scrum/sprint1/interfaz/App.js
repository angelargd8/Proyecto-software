function App(){
    return(
        document.body.style.margin = 0,
        <div id = "app" style={{
            display:'grid',
            gridTemplateColumns: '1fr',
            backgroundColor: '#f5f5f5',
            height: '100vh',
            position: 'relative'
        }}>
            <Tabs/>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr'
            }}>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    )
}

ReactDOM.render(
    // COMPONENTE BANNER
    <App/>,
    document.getElementById('master')
);