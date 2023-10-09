import { ClockIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Card = ({horarios, local, titulo, participantes, dia, diaSemana}) => {

    return <div className={"flex items-center p-5 border-2 border-r-5 border-solid border-purple-500 h-[70] mb-1 "}>
        <div>
            <div className={"flex flex-col items-center mx-8"}>
                <div className={"text-[#A154F2] text-3xl font-bold"}>{diaSemana}</div>
                <div className={"text-[#7418D4] text-7xl font-bold"}>{dia}</div>
            </div>
        </div>

        <div className={"bg-[#7318D4] w-1 h-28 ms-2 opacity-40"}/>

        <div className={"ml-5 flex gap-16 font-medium"}>
            <div className={"flex flex-col text-3xl gap-7"}>
                <div className="flex items-center gap-8">
                    <ClockIcon className="h-11"/>
                    <p>{horarios}</p>
                </div>
                <div className="flex items-center gap-8">
                    <MapPinIcon className="h-11"/> {local}
                </div>
            </div>
            <div className={"flex flex-col text-3xl gap-7"}>
                <div className={"pe-8"}>
                    {titulo}
                </div>
                <div className={"flex gap-4"}>
                    {
                        participantes.map((participante, index) => {
                            return <UserCircleIcon key={index} className="h-11"/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Card
