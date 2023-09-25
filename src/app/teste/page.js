import Card from "@/components/card";
import Title from "@/components/title";
import Button from "@/components/button";

export default function Home() {
  const nossaAgenda = [{
      diaDaSemana: "Sat",
      dia: 28,
      horarios: "08:00 - 12:00",
      local: "Católica sc",
      titulo: "Introdução lógica sobre arduino",
      participantes: ["participante 1 ", "participante 2 "]

    },
    {
      diaDaSemana: "Sat",
      dia: 29,
      horarios: "08:00 - 12:00",
      local: "Católica sc",
      titulo: "Motores e Ponte H",
      participantes: ["participante josé ", "participante joão "]

    },
    {
      diaDaSemana: "Sat",
      dia: 29,
      horarios: "08:00 - 12:00",
      local: "Católica sc",
      titulo: "Sensores de Refletância",
      participantes: ["Cleitinho", "DR Sementinha"]

    },
    {
      diaDaSemana: "Sat",
      dia: 30,
      horarios: "08:00 - 12:00",
      local: "Católica sc",
      titulo: "Estratégia para o seguidor de linha",
      participantes: ["Cleitinho", "DR Sementinha"]

    }]

  const buttons = [
    {
      title: "Ver mais sobre",
      action: "#"
    },
    {
      title: "Botão",
      action: "#"
    },
    {
      title: "Button",
      action: "#"
    }]

  return (
    <>
       <div className={"w-fit"}>
         {
           nossaAgenda.map( agendaCorrente => {
             return <Card local={agendaCorrente.local} horarios={agendaCorrente.horarios} titulo={agendaCorrente.titulo} participantes={agendaCorrente.participantes} dia={agendaCorrente.dia} diaSemana={agendaCorrente.diaDaSemana} />
           })
         }
       </div>
       <div className={"flex flex-col justify-around mt-2.5"}>
         {
           buttons.map( button => {
             return <div>
              <Button title={button.title} action={button.action}/>
             </div>
           })
         }
       </div>
    </>
  )
}
