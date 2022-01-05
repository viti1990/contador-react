const Contador = () => {

    const [contador,setContador] = React.useState(0);
    const [palabra,addpalabra] = React.useState('cuco');

    const prueba = () => {
        console.log('dsa');
        addpalabra('yeso')
    }
    const aumentar = () =>  {
        setContador(contador + 1);
   
}
   
const disminuir = () =>  {
    if(contador>0){
        setContador(contador - 1);
    }
}

    return (
        <div>
            <h1>Contador : {contador}</h1>
            <h1>Contador : {palabra}</h1>
            <button onClick={prueba}>Prueba</button>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>

        </div>
    )
}