import type { Metadata } from "next";

import AdversaryCard from "../components/cards/AdversaryCard/AdversaryCard";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Adversaries | SI Tracker",
  description:
    "Browse the Adversaries available in the baord game Spirit Island",
};

interface Adversary {
  id: number;
  name: string;
  pathname: string;
  flag: string;
}

const Adversaries = async () => {
  const adversaries = await getData();

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.description}>
          <h1>List of Adversaries</h1>
          <p>These are the Adversaries available in the game.</p>
          <p>Click on the Adversary to learn more about them.</p>
        </div>
        <div className={classes.adversaryWrapper}>
          {adversaries.map((adversary: Adversary) => (
            <AdversaryCard key={adversary.id} {...adversary} />
          ))}
        </div>
      </div>
    </div>
  );
};

const getData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/adversaries");
    const adversaries = await response.json();
    return adversaries;
  } catch (error) {
    console.log("Something went wrong fetching data!");
    console.log(error);
  }
};

export default Adversaries;
