function Content(){
    return (
        <div id="content" style={{
            height:'100%', 
            width:'100%', 
            borderLeft: '1px solid black',
            backgroundColor:'#d9d9d9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Card/>
            <div style={{ marginTop: '20px' }}>
                <button style={buttonStyle}>Fecha Inicio</button>
                <button style={{ ...buttonStyle, marginLeft: '50px' }}>Fecha Final</button>
            </div>
        </div>
    );
}

const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid black',
    margin: '10px',
    cursor: 'pointer',
};