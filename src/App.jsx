import { useState } from "react"
export default function App() {

    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }
    function diminuir() {
        setNumero(numero - 1)
    }
    return (
        <section>
            <div className="caixa">
                <h1>CONTADORA</h1>
                <p id="result">{numero}</p>
                <div className="container">
                    <button onClick={diminuir}>-</button>
                    <button onClick={aumentar}>+</button>
                </div>
            </div>
        </section>
    )
}