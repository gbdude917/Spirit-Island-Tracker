import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="https://github.com/gbdude917/Spirit-Island-Tracker-API">
                API
              </Link>
            </li>
            <li>
              <Link href="https://github.com/gbdude917/Spirit-Island-Tracker">
                Github Repo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
