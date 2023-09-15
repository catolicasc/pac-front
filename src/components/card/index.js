const Card = ({horarios, local, titulo}) => {

    return <div
        className={"flex items-center p-5 border-2 border-r-5 border-solid border-purple-500 h-[150] mb-1 "}>
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{color: "#a154fe", fontSize: "30px", fontWeight: 700}}>Sat</div>
                <div style={{color: "#7418D4", fontSize: "70px", fontWeight: 700}}>30</div>
            </div>
        </div>

        <div style={{ height: 120, width: 4, marginLeft: 5, background: "#7418d4", opacity: 0.4}} />

        <div className={"ml-5 flex gap-8"}>
            <div className={"flex flex-col"}>
                <div>
                    icone {horarios}
                </div>
                <div>
                    icone {local}
                </div>
            </div>
            <div>
                <div>
                    {titulo}
                </div>
                <div className={"flex gap-4"}>
                    <div>personagem 1</div>
                    <div>personagem 2</div>
                </div>
            </div>
        </div>
    </div>
}

export default Card
