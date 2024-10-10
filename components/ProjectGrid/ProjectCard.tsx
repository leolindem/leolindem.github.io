"use client"

import { Center, SimpleGrid, Card, Image, Group, Text, Badge, Button } from "@mantine/core";

interface ProjectProps {
    title: string;
    imgSrc: string;
    technologies : Array<string>;
    description : string;
}

export function Project({ title, imgSrc, technologies, description  }: ProjectProps) {
    return (
        <Card w={300} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image src={imgSrc} height={250}/>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
            </Group>
            <Group mb="md">
                {technologies.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                ))}
            </Group>
            <Text size="sm" c="dimmed">
               {description}
            </Text>
        </Card>
    );
}