"use client"
import {Avatar, Card, Divider, Flex, Grid} from "@mantine/core";
import {CalendarIcon} from "@heroicons/react/20/solid";
import {MapIcon, MapPinIcon} from "@heroicons/react/24/solid";

const ScheduleCard = ({informationCard}) => {
    return <>
               <Flex w={"auto"} className={"p-3 border-[2px] border-[#A154F2] rounded-[10px]"} >
                   <Flex direction={"column"} w={"20%"} >
                       <h2 className={"text-[30px] font-bold text-[#A154F2] flex justify-center"} >{informationCard.diaDaSemana}</h2>
                       <h3 className={"text-[70px] font-bold text-[#7418D4] flex justify-center"}>{informationCard.dia}</h3>
                   </Flex>
                   <Flex  gap={31}>
                       <Divider orientation={"vertical"} color={"#7418D4"} opacity={0.3}   size={"3px"} labelPosition="center"/>
                        <Flex align={"center"}>
                            <Flex direction={"column"}>
                                <Flex align={"center"}><CalendarIcon className="w-[30px] h-[30px] heroicon-sw-1.5" /> <span className={"text-[30px] font-[500] text-[#000] flex justify-center"} >{informationCard.horarios}</span></Flex>
                                <Flex align={"center"}><MapPinIcon  className="w-[30px] h-[30px] heroicon-sw-1.5" /> <span className={"text-[30px] font-[500] text-black flex justify-center"} >{informationCard?.local}</span></Flex>
                            </Flex>
                            <Flex direction={"column"} className={"ml-[15px]"}>
                                <Flex align={"center"}> <span className={"text-[30px] font-[500] text-black flex justify-center"} >{informationCard.titulo}</span></Flex>
                                <Flex>
                                    <Avatar src="https://api.dicebear.com/7.x/pixel-art/svg" size={"50px"} alt="it's me" />
                                    <Avatar src="https://api.dicebear.com/7.x/pixel-art/svg" size={"50px"} alt="it's me" />
                                </Flex>
                            </Flex>
                        </Flex>
                   </Flex>
               </Flex>
    </>
}

export default ScheduleCard;
