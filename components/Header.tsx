"use client";

import { useState, useEffect } from "react";
import { Image } from "@mantine/core";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/travel", label: "Travel" },
];

export function Header() {
  const pathname = usePathname();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={40} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}
