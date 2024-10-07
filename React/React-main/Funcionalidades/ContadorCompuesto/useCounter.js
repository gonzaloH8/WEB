import { useState } from "react";

export const useCounter = (valorInicial = 0) => {

    const [ contador, setContador ] = useState(valorInicial)

    const incrementar = (val = 1) => {
        setContador(contador + val)
    }

    const decrementar = (val = 1, negativo = true) => {
        if(!negativo && contador - val < 0){
            setContador(0)
            return
        }
        setContador(contador - val)
    }

    const resetear = () => {
        setContador(0)
    }
  return {
    contador, 
    incrementar, 
    decrementar, 
    resetear
}
}
