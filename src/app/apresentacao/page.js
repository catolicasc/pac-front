import {Box, Container, Flex, Grid, GridCol, Input} from "@mantine/core";
import MOCK_AGENDA from "@/__mocks__/agenda";
import Card from "@/components/card";
import SimpleCard from "@/components/simple_card";

const aulas = [{
    navigation: "#",
    titleNavigation: "Ingressar",
    cardTitle: "Introdução a disciplina",
    cardContent: "Nesta aula introdutória sobre robótica seguidor de linha, exploraremos os conceitos fundamentais para a construção de um carrinho que pode seguir uma linha no chão de forma autônoma. Abordaremos componentes essenciais, como sensores infravermelhos, motores, chassi e microcontroladores. Aprenderemos como esses elementos interagem para permitir que o robô detecte a linha e faça ajustes de direção. Prepare-se para uma jornada emocionante no mundo da robótica, onde você começará a desvendar os segredos por trás desses incríveis dispositivos autônomos!",
    status:"concluido",
    sourceImage: "/apresentacao.jpg"
},
    {
        navigation: "#",
        titleNavigation: "Ingressar",
        cardTitle: "Como trabalhar com sensores",
        cardContent: "Os sensores de seguidor de linha são componentes essenciais no mundo da robótica, capacitando máquinas a seguir trajetórias definidas com precisão. Estes dispositivos detectam variações no contraste entre uma linha e sua superfície circundante, permitindo que os robôs tomem decisões em tempo real para permanecerem no caminho desejado. Nesta introdução, exploraremos como os sensores de seguidor de linha funcionam, seus diferentes tipos e aplicações, e como podem ser integrados em projetos robóticos para criar sistemas autônomos capazes de navegar em ambientes complexos.",
        status:"pendente",
        sourceImage: "/aula02.jpg"
    },
    {
        navigation: "#",
        titleNavigation: "Ingressar",
        cardTitle: "Como trabalhar com motores",
        cardContent: "Os motores desempenham um papel crucial na robótica, impulsionando a movimentação e a funcionalidade dos dispositivos. Nesta introdução, exploraremos a importância dos motores em projetos robóticos, abordando os tipos mais comuns, como motores de corrente contínua (DC) e servo motores, bem como suas aplicações em diferentes cenários. Vamos aprender como controlar a velocidade e a direção dos motores, além de como integrá-los de maneira eficaz em robôs e veículos autônomos. Prepare-se para embarcar em uma jornada empolgante...",
        status:"pendente",
        sourceImage: "/aula03.jpg"
    },
    {
        navigation: "#",
        titleNavigation: "Aula 04",
        cardTitle: "Estratégias  do seguidor de linha",
        cardContent: "As estratégias de seguidor de linha são o cérebro por trás da autonomia dos robôs nessa tarefa desafiadora. Nesta introdução, mergulharemos no emocionante mundo das estratégias de controle usadas por seguidores de linha. Exploraremos algoritmos de controle, como o PID (Proporcional-Integral-Derivativo), que permitem aos robôs tomar decisões precisas com base nos dados dos sensores de linha. Discutiremos também técnicas de programação e lógica que possibilitam a correção de erros e desvios, garantindo que o robô siga a linha de forma eficiente e suave.",
        status:"pendente",
        sourceImage: "/aula04.jpg"
    }]
const Page = () => {
    return <>
        <Container>
            {MOCK_AGENDA.map((agendaCorrente, index) => {
                return <Card key={index} local={agendaCorrente.local} horarios={agendaCorrente.horarios} titulo={agendaCorrente.titulo} participantes={agendaCorrente.participantes} dia={agendaCorrente.dia} diaSemana={agendaCorrente.diaDaSemana} />
            })}
            <Flex
            w={"100%"}
            alignItems={"center"}
            direction="row"
            gap={20}
            justify={"center"}
            mih={150} wrap="wrap">
                {aulas.map(aula => {
                    return <Box w={400}>
                        <SimpleCard navigation={aula.navigation} titleNavigation={aula.titleNavigation} cardTitle={aula.cardTitle}
                                    cardContent={aula.cardContent}
                                    status={aula.status} sourceImage={aula.sourceImage}/>
                    </Box>
                })}

            </Flex>
        </Container>
    </>
}

export default Page
