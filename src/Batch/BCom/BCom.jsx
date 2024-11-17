import React from "react";
import Cards from "../../components/Cards";
import { bcom } from "../../../public/imageUrl";

function BCom() {
  return (
    <>
      <div className="sections">
        <Cards title="BCom 1" userLinks="/BCom1" cardImagelink={bcom} />
        <Cards title="BCom 2" userLinks="/BCom2" cardImagelink={bcom} />
        <Cards title="BCom 3" userLinks="/BCom/3" cardImagelink={bcom} />
      </div>
    </>
  );
}

export default BCom;
