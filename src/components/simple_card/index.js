"use client"
import {Badge, Button, Card, Group, Text} from "@mantine/core";
import Link from "next/link";
import { Image } from '@mantine/core';


const statusColor = {
    concluido: "green",
    pendente: "yellow"
}
const SimpleCard = ({navigation, titleNavigation, cardTitle, status = "red", cardContent, sourceImage}) => {

    return <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={sourceImage}
                    h={"auto"}
                    w="auto"
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{cardTitle}</Text>
                <Badge color={statusColor[status]} variant="light">
                    {status}
                </Badge>
            </Group>

            <Text ta={"justify"} size="sm" c="dimmed">
                {cardContent}
            </Text>

            <Button variant="light" color="#A154F2" fullWidth mt="md" radius="md">
                <Link href={navigation}>{titleNavigation}</Link>
            </Button>
        </Card>
    </>
}

export default SimpleCard;
