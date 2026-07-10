"use client";

import classes from "./editorial.module.css";

export type Mode = "professional" | "personal";

export function ModeToggle({
  mode,
  onChange,
}: {
  mode: Mode;
  onChange: (mode: Mode) => void;
}) {
  return (
    <div className={classes.toggleRow}>
      <div className={classes.toggle}>
        <button
          type="button"
          className={`${classes.toggleBtn} ${
            mode === "professional" ? classes.toggleBtnActive : ""
          }`}
          onClick={() => onChange("professional")}
          aria-pressed={mode === "professional"}
        >
          Professional
        </button>
        <span className={classes.spark} aria-hidden>
          ✦
        </span>
        <button
          type="button"
          className={`${classes.toggleBtn} ${
            mode === "personal" ? classes.toggleBtnActive : ""
          }`}
          onClick={() => onChange("personal")}
          aria-pressed={mode === "personal"}
        >
          Personal
        </button>
      </div>
    </div>
  );
}
