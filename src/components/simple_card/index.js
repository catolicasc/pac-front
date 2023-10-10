"use client"


const statusColor = {
    concluido: "green",
    pendente: "yellow",
    andamento: "blue"
}
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {Button, Paper, Title, useMantineTheme, Text, Badge} from '@mantine/core';
import classes from "@/components/simple_card/Demo.module.css";

const data = [
    {
        image: '/apresentacao.jpg',
        title: 'Introdução, Relembrando conceitos básicos de eletrônica e programação',
        status: 'andamento',
    },
    {
        image: '/aula02.jpg',
        title: 'Conversando sobre motores, ponte H e sua aplicação',
        status: 'pendente',
    },
    {
        image: '/aula03.jpg',
        title: 'Conversando sobre sensores de linha e sua aplicação',
        status: 'pendente',
    },
    {
        image: '/aula04.jpg',
        title: 'Estratégias de controle e como aplicar no seguidor de Linha',
        status: 'pendente',
    },
];

function Card({ image, title, status }) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    <Badge color={statusColor[status]} variant="filled">
                        {status}
                    </Badge>
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Ingressar
            </Button>
        </Paper>
    );
}

function SimpleCard() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{ base: '100%', sm: '50%' }}
            slideGap={{ base: 'xl', sm: 2 }}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}
 export default SimpleCard;
// const SimpleCard = ({navigation, titleNavigation, cardTitle, status = "red", cardContent, sourceImage}) => {
//
//     return <>
//         <Card shadow="sm" padding="lg" radius="md" withBorder>
//             <Card.Section>
//                 <Image
//                     src={sourceImage}
//                     h={"auto"}
//                     w="auto"
//                     alt="Norway"
//                 />
//             </Card.Section>
//
//             <Group justify="space-between" mt="md" mb="xs">
//                 <Text fw={500}>{cardTitle}</Text>
//                 <Badge color={statusColor[status]} variant="light">
//                     {status}
//                 </Badge>
//             </Group>
//
//             {/*<Text ta={"justify"} size="sm" c="dimmed">*/}
//             {/*    {cardContent}*/}
//             {/*</Text>*/}
//
//             <Button variant="light" color="#A154F2" fullWidth mt="md" radius="md">
//                 <Link href={navigation}>{titleNavigation}</Link>
//             </Button>
//         </Card>
//     </>
// }
//
// export default SimpleCard;
