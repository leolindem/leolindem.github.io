import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { ProjectGrid } from "../components/ProjectGrid/ProjectGrid";
import { Text, Space } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <Welcome />
      {/* <ColorSchemeToggle /> */}
      <Space h={100} />
      <ProjectGrid />
    </>
  );
}
