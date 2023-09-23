import SimpleCardComponent from "@/components/simpleCard/page";
import {getServiceComponents} from "@/service/components";
const getComponents = async () => {
   const response =  await getServiceComponents();
    console.log("{", response)
   return response.data
}
const PaginaComponente = async () => {
    const componentes = await getComponents();
    return (
        <>
            {
                componentes.map( componente => {
                    return <SimpleCardComponent
                        title={componente.title}
                        alt={componente.shortDescription}
                        pathImage={componente.path}
                    />
                })
            }
        </>
    )
}

export default PaginaComponente;
