"use client";

import { Center, SimpleGrid } from "@mantine/core";
import { TravelCard } from "../../components/TravelCards/TravelCard";

export default function Travel() {
  return (
    <>
      <Center>
        <SimpleGrid cols={3} spacing={"xl"} verticalSpacing={"xl"}>
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </SimpleGrid>
      </Center>
    </>
  );
}
