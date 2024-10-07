import { useCounter } from "./Hooks/useCounter"

export const ContadorComponentes = () => {

    const { contador, incrementar, decrementar, resetear } = useCounter(0)

  return (
    <>
    <h1>Contador: {contador}</h1>
    <button className="btn btn-primary" onClick={() => incrementar()}>+1</button>
    <button className="btn btn-primary" onClick={() => resetear()}>reset</button>
    <button className="btn btn-primary" onClick={() => decrementar()}>-1</button>

    </>
  )
}
