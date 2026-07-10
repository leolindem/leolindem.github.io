"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Nav } from "../components/editorial/Nav";
import { Footer } from "../components/editorial/Footer";
import { ModeToggle, type Mode } from "../components/editorial/ModeToggle";
import classes from "../components/editorial/editorial.module.css";

type Item = {
  title: string;
  desc: string;
  meta: string;
  href?: string;
};

const content: Record<
  Mode,
  {
    role: React.ReactNode;
    lead: string;
    label: string;
    items: Item[];
    footerNote?: { text: string; href: string };
  }
> = {
  professional: {
    role: (
      <>
        Software Engineer at <span className={classes.roleAccent}>Google</span> ·
        University of Michigan alum
      </>
    ),
    lead: "I build fast, thoughtful software — from command-line tools in C++ to mobile apps and scalable systems. These days I'm an engineer at Google, still shipping things I'd want to use myself.",
    label: "Selected work",
    items: [
      {
        title: "Good Stretch",
        desc: "Mobile app to create and follow guided stretch routines",
        meta: "React Native",
        href: "https://github.com/leolindem/Yoga-app",
      },
      {
        title: "Bolt",
        desc: "A fast command-line text editor, in the spirit of vi",
        meta: "C++",
        href: "https://github.com/leolindem/Bolt",
      },
      {
        title: "Scalable Search Engine",
        desc: "Distributed search over small-scale indexes",
        meta: "Hadoop · Python",
      },
      {
        title: "Database from scratch",
        desc: "A full SQL database clone built in C++",
        meta: "C++",
      },
      {
        title: "Chess Engine",
        desc: "A chess engine to explore search and evaluation",
        meta: "Python",
      },
      {
        title: "Mentor Connection",
        desc: "Connecting Michigan students to career mentors",
        meta: "Next.js · Firebase",
      },
    ],
  },
  personal: {
    role: (
      <>
        Born in Brazil · lived in{" "}
        <span className={classes.roleAccent}>four countries</span> · always
        planning the next trip
      </>
    ),
    lead: "Life's been a bit of a road trip. Brazil, Ecuador, Ghana, the Dominican Republic — each one left a mark. When I'm not writing code you'll find me chasing national parks, new food, and long drives with no fixed plan.",
    label: "Lately",
    items: [
      {
        title: "Grew up across four countries",
        desc: "Brazil, Ecuador, Ghana & the Dominican Republic",
        meta: "🌍",
        href: "/travel",
      },
      {
        title: "Chess, casually",
        desc: "Built my own engine to understand what I keep losing to",
        meta: "Hobby",
      },
      {
        title: "Always a soundtrack",
        desc: "Music that shifts with wherever I happen to land",
        meta: "Music",
      },
    ],
    footerNote: {
      text: "See where I've been →",
      href: "/travel",
    },
  },
};

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("professional");

  // Honor a shared ?mode= link on load without breaking static rendering.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("mode");
    if (param === "personal" || param === "professional") setMode(param);
  }, []);

  const changeMode = (next: Mode) => {
    setMode(next);
    const url = new URL(window.location.href);
    url.searchParams.set("mode", next);
    window.history.replaceState(null, "", url);
  };

  const c = content[mode];

  return (
    <div className={classes.page}>
      <div className={classes.shell}>
        <Nav active="/" />

        <ModeToggle mode={mode} onChange={changeMode} />

        <div className={classes.hero}>
          <img
            src="/profile_pic.jpg"
            alt="Leonardo Lindemberg"
            className={classes.avatar}
          />
          <div>
            <h1 className={classes.name}>Leonardo Lindemberg</h1>
            <p className={classes.role}>{c.role}</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className={classes.lead}>{c.lead}</p>

            <div className={classes.section}>
              <p className={classes.sectionLabel}>{c.label}</p>
              {c.items.map((item) => {
                const isLink = Boolean(item.href);
                const inner = (
                  <>
                    <span className={classes.rowMain}>
                      <span className={classes.rowTitle}>{item.title}</span>
                      <span className={classes.rowDesc}>{item.desc}</span>
                    </span>
                    <span className={classes.rowMeta}>
                      {item.meta}
                      {isLink && <span className={classes.rowArrow}> →</span>}
                    </span>
                  </>
                );
                if (!isLink) {
                  return (
                    <div
                      key={item.title}
                      className={`${classes.row} ${classes.rowStatic}`}
                    >
                      {inner}
                    </div>
                  );
                }
                const external = item.href!.startsWith("http");
                return external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.row} ${classes.rowLink}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href!}
                    className={`${classes.row} ${classes.rowLink}`}
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>

            {c.footerNote && (
              <Link href={c.footerNote.href} className={classes.backLink}>
                {c.footerNote.text}
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        <div style={{ marginTop: 40 }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
