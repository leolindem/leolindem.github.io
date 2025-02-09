"use client"

import { Card, Image, Group, Text, Badge, ActionIcon } from "@mantine/core";

interface ProjectProps {
    title: string;
    imgSrc: string;
    technologies : Array<string>;
    description : string;
    githubSrc? : string;
}

export function Project({ title, imgSrc, technologies, description, githubSrc  }: ProjectProps) {
    return (
      <Card w={300} shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={imgSrc} height={250} />
        </Card.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{title}</Text>
        </Group>
        <Group mb="md">
          {technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </Group>
        {githubSrc && (
          <a href={githubSrc} target="_blank">
            <ActionIcon variant="filled" size="md" radius="xl" color="white">
              <Image src="github-mark.png"></Image>
            </ActionIcon>
          </a>
        )}
        <Text size="sm" c="dimmed" mt="md">
          {description}
        </Text>
      </Card>
    );
}