import Head from "next/head";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";

import classes from "./page.module.css";

interface Spirit {
  id: number;
  name: string;
  pathname: string;
  image: string;
}

const SpiritDetails = (props: Spirit) => {
  return (
    <>
      <Head>
        <title>
          {typeof props.name === "string" ? props.name : "Spirit Details"}
        </title>
        <meta name="description" content={props.name} />
      </Head>

      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <h1>{props.name}</h1>
          </div>

          <div className={classes.content}>
            <section className={classes.section__intro}>
              <div className={classes.imageWrapper}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.spiritImage}
                    src={props.image}
                    alt={props.name}
                    height={500}
                    width={500}
                  />
                </div>
              </div>

              {/* TODO: Add text to database about playstyle, setup, and complexity */}
              <div className={classes.textContainer}>
                <div className={classes.playstyle_subsection}>
                  <h2>PLAY STYLE</h2>
                  <p>
                    Virtually all offense to start with: without a more
                    defensive teammate, Blight may become a problem. Excellent
                    at destroying buildings, less good at containing Explorers.
                    Using Thundering Destruction tends to be a burst affair: a
                    turn or two of position and build up Energy, followed by a
                    really big turn. Starting Powers are extremely focused on
                    Air and Fire: good for Thundering Destruction, bad for Major
                    Power versatility.
                  </p>
                </div>

                <div className={classes.subInfo}>
                  <div
                    className={`${classes.intro__subsection} ${classes.marginRight}`}
                  >
                    <h2>SETUP</h2>
                    <p>
                      Put 2 Presence on your starting board in the
                      highest-numbered Sands.
                    </p>
                  </div>
                  <div className={classes.intro__subsection}>
                    <h2>COMPLEXITY</h2>
                    <p>LOW</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
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

// Generates `/spirits/Spirit_Name_1` and `/spirits/Spirit_Name_2`
export const getStaticPaths: GetStaticPaths = async () => {
  const spirits = await getData();

  const paths = spirits.map((spirit: Spirit) => ({
    params: { pathname: spirit.pathname },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pathname = params?.pathname;

  const response = await fetch(
    `http://localhost:8080/api/v1/spirits/pathname/${pathname}`
  );
  const spirit: Spirit = await response.json();

  return { props: spirit };
};

export default SpiritDetails;
