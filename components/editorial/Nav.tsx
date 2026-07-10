import Link from "next/link";
import classes from "./editorial.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/travel", label: "Travel" },
];

export function Nav({ active }: { active?: string }) {
  return (
    <nav className={classes.nav}>
      <Link href="/" className={classes.wordmark}>
        Leonardo Lindemberg
      </Link>
      <div className={classes.navLinks}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${classes.navLink} ${
              active === l.href ? classes.navLinkActive : ""
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
