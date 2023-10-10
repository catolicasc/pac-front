import {Box, Container} from "@mantine/core";
import MOCK_AGENDA from "@/__mocks__/agenda";
import SimpleCard from "@/components/simple_card";
import ScheduleCard from "@/components/schedule_card";

const Page = () => {
    return <>
        <Container className={"mt-[100px] text-[60px] font-bold"}>
            <h2 className={"mb-[40px]"}>Programação</h2>
            <h3 className={"text-[#7418D4] text-[30px]"}>Cronograma</h3>
            {MOCK_AGENDA.map((agendaCorrente, index) => {
                return <Box className={"mb-4"}>
                    <ScheduleCard key={index} informationCard={agendaCorrente} />
                </Box>
            })}

                    <SimpleCard />

        </Container>
    </>
}

export default Page
