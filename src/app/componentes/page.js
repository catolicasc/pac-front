import SimpleCardComponent from "@/components/simpleCard/page";
import EstadoTeste from "@/components/estadoTeste";
import Table from "@/components/table";
const getComponents = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1, path: "/arduino/resistor.png", shortDescription: "Led Vermelho"
                },
                {
                    id: 1, path: "/arduino/botao.png", shortDescription: "Led Vermelho"
                },
                {
                    id: 1, path: "/arduino/led.png", shortDescription: "Led Vermelho"
                }
            ])
        }, 100)
    })
}
const PaginaComponente = async () => {
    const componentes = await getComponents();
    return (
        <>
           <Table />
            {/*{*/}
            {/*    componentes.map( componente => {*/}
            {/*        return <SimpleCardComponent*/}
            {/*            title={componente.title}*/}
            {/*            alt={componente.shortDescription}*/}
            {/*            pathImage={componente.path}*/}
            {/*        />*/}
            {/*    })*/}
            {/*}*/}
        </>
    )
}

export default PaginaComponente;
