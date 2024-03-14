import Link from "next/link";
import Image from "next/image";

import classes from "./AdversaryCard.module.css";

interface AdversaryCardProps {
  id: number;
  name: string;
  pathname: string;
  flag: string;
}

const AdversaryCard = (props: AdversaryCardProps) => {
  return (
    <Link href={`/adversaries/${props.pathname}`} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={props.flag}
            alt={props.name}
            height={300}
            width={300}
          />
        </div>
        <div className={classes.textContainer}>
          <h2>{props.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default AdversaryCard;
