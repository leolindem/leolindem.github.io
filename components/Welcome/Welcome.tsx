"use client"

import { Anchor, Text, Title, Image, Avatar, Center } from "@mantine/core";
import classes from "./Welcome.module.css";
import { useEffect, useState } from "react";

export function Welcome() {
  const fullName = "Lindemberg";
  const [typedName, setTypedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const speed = 100;

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedName((prevText) => prevText + fullName[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName, speed]);

  return (
    <>
      <Center mt={40}>
        <Avatar src="/profile_pic.jpg" radius={200} size={200} />
      </Center>
      <Title className={classes.title} ta="center" mt={40}>
        Leonardo{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          {typedName}
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Born in Brazil and lived in Ecuador, Ghana, Dominican Republic. Studying
        Computer Science - Engineering at the University of Michigan with a passion
        in exploring different technologies and building cool things!
      </Text>
    </>
  );
}
