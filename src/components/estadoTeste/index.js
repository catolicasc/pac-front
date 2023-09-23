"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";


const EstadoTeste = ( ) => {
    console.log("teste")
    const router = useRouter()
    const [led, setLed] = useState(false)

    const mudarEstadoDoLed = () => {
        setLed(!led)
    }
    return <>
        <button onClick={() => router.push("/")}>Redirecionar para raiz</button>
        <span onClick={mudarEstadoDoLed}>Nosso led está {led ? <p className={"bg-green-500"}>Ligado</p> : <p className={"bg-gray-500"}>Desligado</p>}</span>

    </>
}

export default EstadoTeste
