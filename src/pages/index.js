import React from "react";

import Layout from "../layouts/layout";

import TextContainer from "../components/TextContainer";
import TextImageContainer from "../components/TextImageContainer";

import ScienceImage from "../images/svg/science.svg";
import ServerImage from "../images/svg/server.svg";

const IndexPage = () => {
  return (
    <Layout
      title={"Data harvesting from sensors"}
      subTitle={"Industrial sensors uploading data to the cloud for analysis."}
    >
      <TextContainer title={"What we offer"} greyBG={true}>
        We build services that interface with data collection points. We set up
        the systems that gather the data from your preferred sensor. We will
        then draw meaning from the large amounts of data by analysing and
        visualizing the data using modern techniques.
      </TextContainer>
      <TextImageContainer
        title={"A Modern Stack"}
        image={ScienceImage}
        imageLeft={false}
        greyBG={false}
        spinningImage={true}
      >
        Built using modern electronics, frameworks and services to make your
        application future proof. We use technologies like Machine Learning,
        Python, single-board computers, Google Cloud, Big Data and Data Mining
        to deliver the best possible service to our customers.
      </TextImageContainer>
      <TextImageContainer
        title={"Reliability"}
        image={ServerImage}
        imageLeft={true}
        greyBG={true}
      >
        Stability, reliability and security for our services is one of the most
        important parts of what we do, that is why we offer hosting your
        solution in the cloud. In some situations an onsite server can be used
        if it is deemed to be the better solution to your problem.
      </TextImageContainer>
    </Layout>
  );
};

export default IndexPage;
