"use client";

import { Center, SimpleGrid, Title, Badge, Button } from "@mantine/core";
import { Project } from "./ProjectCard";
import { useMediaQuery } from "@mantine/hooks";

export function ProjectGrid() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Title ta="center" mb={80} size={70}>
        Projects
      </Title>

      <Center>
        <SimpleGrid cols={isMobile ? 1 : 3} spacing={120} mb={50}>
          <Project
            title="Scalable Seach Engine"
            imgSrc="/search_engine.jpg"
            technologies={["hadoop", "Python", "Flask", "MySql"]}
            description=" Scalable Seach engine for small scale search indexes"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
          <Project
            title="Mentor Connection Website"
            imgSrc="/MentorMeets.jpg"
            technologies={["Next.js", "FireBase", "TypeScript"]}
            description="Website to connecting Michigan students to Career Mentors"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
          <Project
            title="Database from scratch "
            imgSrc="database.jpg"
            technologies={["C++"]}
            description="Designed and created a full SQL database clone in C++"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
          <Project
            title="Chess Engine"
            imgSrc="Chess_Engine.jpg"
            technologies={["Python"]}
            description="Playable chess engine with AI opponent mode"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
          <Project
            title="Focus Chrome Extension"
            imgSrc="/Focus_extension.jpg"
            technologies={["JavaScript"]}
            description="Keeps a timer of how long you have spent on 'blacklisted' tabs and 
            warns you after some timer is done"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
          <Project
            title="Spotify Danceability Web App"
            imgSrc="spotify.jpg"
            technologies={["Python", "React"]}
            description="Tells users how Danceable a song is on Spotify"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
          <Project
            title="Command Line Password Manager in Rust"
            imgSrc="rust.jpg"
            technologies={["Rust"]}
            description="Simple Command Line Tool that keeps track of passwords for users. My first project in Rust!"
            githubSrc="https://github.com/leolindem/PW_RUSTCLT"
          />
        </SimpleGrid>
      </Center>
    </>
  );
}
