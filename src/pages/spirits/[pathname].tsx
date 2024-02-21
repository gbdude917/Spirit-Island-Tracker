import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";

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
      <div>{props.name}</div>
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
