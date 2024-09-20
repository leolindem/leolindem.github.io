import { Center, SimpleGrid, Title, Badge, Button } from "@mantine/core";
import { Project } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <>
      <Title ta="center" mb={80} size={70} >Projects</Title>

      <Center>
        <SimpleGrid cols={3} spacing={120} mb={50}>
          <Project title="Scalable Seach Engine" imgSrc="/search_engine.jpg" />
          <Project title="Mentor Connection Website" imgSrc="/MentorMeets.jpg"/>
          <Project title="Database from scratch "imgSrc="database.jpg"/>
          <Project title="Chess Engine" imgSrc="Chess_Engine.jpg"/>
          <Project title="Focus Chrome Extension" imgSrc="/Focus_extension.jpg"/>
          <Project title="Spotify Danceability Web App" imgSrc="spotify.jpg"/>
        </SimpleGrid>
      </Center>
    </>
  );
}
