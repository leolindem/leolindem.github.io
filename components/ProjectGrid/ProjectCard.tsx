"use client"

import { Center, SimpleGrid, Card, Image, Group, Text, Badge, Button } from "@mantine/core";

interface ProjectProps {
    title: string;
    imgSrc: string;
}

export function Project({ title, imgSrc  }: ProjectProps) {
    return (
        <Card w={300} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image src={imgSrc} height={250}/>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
            </Group>
            <Group mb="md">
                <Badge>Python</Badge>
                <Badge>React</Badge>
                <Badge>Hadoop</Badge>
            </Group>
            <Text size="sm" c="dimmed">
                Scalable Seach engine for small scale search indexes
            </Text>
        </Card>
    );
}