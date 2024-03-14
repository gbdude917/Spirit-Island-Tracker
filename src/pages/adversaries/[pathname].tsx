import Head from "next/head";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";

import classes from "./page.module.css";

interface Adversary {
  id: number;
  name: string;
  pathname: string;
  image: string;
  flagname: string;
}

const AdversaryDetails = (props: Adversary) => {
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
                  {/* TODO: Add an actual image for the adversary */}
                  <Image
                    className={classes.adversaryImage}
                    src={props.image}
                    alt={props.name}
                    height={500}
                    width={500}
                  />
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
    const response = await fetch("http://localhost:8080/api/v1/adversaries");
    const adversaries = await response.json();
    return adversaries;
  } catch (error) {
    console.log("Something went wrong fetching data!");
    console.log(error);
  }
};

// Generates `/adversaries/Adversary_Name_1` and `/adversaries/Adversary_Name_2`
export const getStaticPaths: GetStaticPaths = async () => {
  const adversaries = await getData();

  const paths = adversaries.map((adversary: Adversary) => ({
    params: { pathname: adversary.pathname },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pathname = params?.pathname;

  const response = await fetch(
    `http://localhost:8080/api/v1/adversaries/pathname/${pathname}`
  );
  const adversary: Adversary = await response.json();

  return { props: adversary };
};

export default AdversaryDetails;
