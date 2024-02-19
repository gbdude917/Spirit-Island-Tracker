import Link from "next/link";

import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.title}>
            <h1>Spirit Island Game Tracker</h1>
          </div>

          <div className={classes.about}>
            Record all your Spirit Island game sessions or explore the different
            Spirits and Adversaries currently in the game.
          </div>

          <div className={classes.register}>
            <Link href="/login" className={classes.button}>
              Register / Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
