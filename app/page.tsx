import { Welcome } from "../components/Welcome/Welcome";
import { ProjectGrid } from "../components/ProjectGrid/ProjectGrid";
import { Text, Space } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Space h={100} />
      <ProjectGrid />
    </>
  );
}
