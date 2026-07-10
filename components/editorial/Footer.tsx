import Link from "next/link";
import classes from "./editorial.module.css";

export function Footer() {
  return (
    <div className={classes.footer}>
      <a href="https://github.com/leolindem" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="mailto:leonardoclind@gmail.com">Email</a>
      <Link href="/travel">Travel</Link>
    </div>
  );
}
