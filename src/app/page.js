import Image from 'next/image'
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Button from "@/components/button";
import {CodeFrame} from "next/dist/client/components/react-dev-overlay/internal/components/CodeFrame";

export default function Home() {
  return (
    <>
       <Title title={"Robótica e Programação"} />

        <Subtitle title={"Entrada do usuário"} />

        <div>
            É importante saber que podemos basear nossas variáveis, em entradas do usuário, para isso usaremos a função:
        </div>
       <code>
           <CodeFrame code={codeString} language="javascript" />

           Serial.print()
           Serial.read()
       </code>
        <Button title={"Ver mais sobre"} action={() => {
            console.log("Action")
        }} />
    </>
  )
}
