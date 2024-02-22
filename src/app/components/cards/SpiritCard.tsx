import Link from "next/link";
import Image from "next/image";

import classes from "./SpiritCard.module.css";

interface SpiritCardProps {
  id: number;
  name: string;
  pathname: string;
  image: string;
}

const SpiritCard = (props: SpiritCardProps) => {
  return (
    <Link href={`/spirits/${props.pathname}`} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={props.image}
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

export default SpiritCard;
