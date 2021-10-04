import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import AssetContainer from "../components/AssetContainer/AssetContainer";
// import Seo from '../components/Seo/Seo';
import messages from "../lang/messages/en";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <title>{messages.hero_title}</title>
      <h1>{messages.hero_title}</h1>
      <AssetContainer />
    </main>
  );
};

export default IndexPage;
