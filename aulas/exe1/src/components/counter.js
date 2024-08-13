import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(1)
    function diminuiCont(){
        setCounter(counter - 1);
    }
    function adicionarCont(){
        setCounter(counter + 1);
    }
    return(
        <div>
            <div>{counter}</div>
            <button onClick={diminuiCont}>Decrementar</button>
            <button onClick={adicionarCont}>Adicionar</button>
        </div>
    )
}

export default Counter;
