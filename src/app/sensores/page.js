import Card from "@/components/card";
import Title from "@/components/title";

export default function Home() {
  const nossaAgenda = [{
    diaDaSemana: "Sat",
    "dia": 30,
    horarios: "08:00 - 12:00",
    local: "Católica de santa catarina",
    titulo: "Introdução lógica sobre arduino",
    participantes: ["participante 1 ", "participante 2 "]

  },
    {
      diaDaSemana: "Sat",
      "dia": 30,
      horarios: "08:00 - 12:00",
      local: "Católica de santa catarina",
      titulo: "Motores e Ponte H",
      participantes: ["participante 1 ", "participante 2 "]

    }]

  const buscarAgenda = () => {

  }

  return (
    <>
      <Title title={"September"} />
       <div className={"w-3/5"}>
         {
           nossaAgenda.map( agendaCorrente => {
             return <Card local={agendaCorrente.local} horarios={agendaCorrente.horarios} titulo={agendaCorrente.titulo} />
           })
         }
       </div>
    </>
  )
}
