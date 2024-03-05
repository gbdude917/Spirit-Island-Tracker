import SpiritCard from "../components/cards/SpiritCard";

import type { Metadata } from "next";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "SI Tracker | Spirits",
  description: "Browse the Spirits available in the baord game Spirit Island",
};

interface Spirit {
  id: number;
  name: string;
  pathname: string;
  image: string;
}

const Spirits = async () => {
  const spirits = await getData();

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.description}>
          <h1>List of Spirits</h1>
          <p>These are the Spirits available in the game.</p>
          <p>Click on the Spirit to learn more about them.</p>
        </div>
        <div className={classes.spiritWrapper}>
          {spirits.map((spirit: Spirit) => (
            <SpiritCard key={spirit.id} {...spirit} />
          ))}
        </div>
      </div>
    </div>
  );
};

const getData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/spirits");
    const spirits = await response.json();
    return spirits;
  } catch (error) {
    console.log("Something went wrong fetching data!");
    console.log(error);
  }
};

export default Spirits;
