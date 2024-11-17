import React from "react";
import Cards from "./components/Cards";
import MainSection from "./components/MainSection";
import { btech, bca, bsc, bba, ba, bcom } from "../public/imageUrl.js";

function CardHome() {
  return (
    <>
      <MainSection />
      <div className="Card-Home-Container">
        <div className="sections Card-Home-Section ">
          <Cards title="Btech" userLinks="/btech" cardImagelink={btech} />
          <Cards title="Bca" userLinks="/bca" cardImagelink={bca} />
          <Cards title="Bsc" userLinks="/bsc" cardImagelink={bsc} />
        </div>
        {/* <div className="sections">
          <Cards title="BBA" userLinks="/bba" cardImagelink={bba} />
          <Cards title="BA" userLinks="/ba" cardImagelink={ba} />
          <Cards title="BCom" userLinks="/bcom" cardImagelink={bcom} />
        </div> */}
      </div>
    </>
  );
}

export default CardHome;
