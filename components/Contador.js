const Contador = () => {

    const [contador,setContador] = React.useState(0);
    const [palabra,addpalabra] = React.useState('cuco');

    const palabraPrueba = () => {
        console.log('dsa');
        addpalabra('yeso')
    }


    const aumentar = () =>  {
        setContador(contador + 1);
    }
   
    const disminuir = () =>  setContador(contador - 1);


    return (
        <div>
            <p class="title">Contador : 
                <span class={contador < 0 ? "menor" : "mayor"}>
                    {contador}
                  </span>
             </p>
            <h1>Cambia la palabra : {palabra}</h1>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>

            <button onClick={palabraPrueba}>Cambia la palabra</button>


        </div>
    )
}