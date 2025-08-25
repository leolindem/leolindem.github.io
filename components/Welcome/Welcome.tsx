"use client"

import { Text, Title, Avatar, Center } from "@mantine/core";
import classes from "./Welcome.module.css";
import { useEffect, useState } from "react";
import { motion, animate } from "motion/react"

export function Welcome() {
  const fullName = "Lindemberg";
  const [typedName, setTypedName] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const controls = animate(0, fullName.length, {
      duration: 2,
      ease: "linear",
      onUpdate: (latest) => {
        const count = Math.floor(latest);
        setTypedName(fullName.slice(0, count));
        if (count >= fullName.length) setTimeout(() => setFinished(true), 3000);
      },
    });
    return () => controls.stop();
  }, []);

  return (
    <>
      <Center mt={40}>
        <Avatar src="/profile_pic.jpg" radius={200} size={200} />
      </Center>
      <Title className={classes.title} ta="center" mt={40}>
        Leonardo&nbsp;
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {typedName}
        </Text>
        {!finished && (
          <motion.span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "0.15ch",
              height: "1em",
              marginLeft: 6,
              translateY: "0.1em",
              backgroundColor: "#fb5607",
            }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </Title>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Born in Brazil and lived in Ecuador, Ghana, Dominican Republic. Studying
        Computer Science - Engineering at the University of Michigan with a
        passion in exploring different technologies and building cool things!
      </Text>
    </>
  );
}
