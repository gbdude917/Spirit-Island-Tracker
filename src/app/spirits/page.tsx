import type { GetStaticPaths } from "next";

import SpiritCard from "../components/cards/SpiritCard";

import classes from "./page.module.css";

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
  const response = await fetch("http://localhost:8080/api/v1/spirits");
  const spirits = await response.json();

  return spirits;
};

export default Spirits;
