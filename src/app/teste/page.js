import Card from "@/components/card";
import Button from "@/components/button";

export default function Home() {

  return (
    <>
       <div className={"w-fit"}>
         {
           nossaAgenda.map( (agendaCorrente, index) => {
             return <Card key={index} local={agendaCorrente.local} horarios={agendaCorrente.horarios} titulo={agendaCorrente.titulo} participantes={agendaCorrente.participantes} dia={agendaCorrente.dia} diaSemana={agendaCorrente.diaDaSemana} />
           })
         }
       </div>
       <div className={"flex flex-col justify-around mt-2.5"}>
         {
           buttons.map( (button, index) => {
             return <div key={index}>
              <Button title={button.title} action={button.action}/>
             </div>
           })
         }
       </div>
    </>
  )
}
