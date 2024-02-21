import type { GetStaticPaths } from "next";

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
      {spirits.map((spirit: Spirit) => (
        <SpiritCard key={spirit.id} {...spirit} />
      ))}
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
