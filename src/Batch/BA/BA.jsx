import React from "react";
import Cards from "../../components/Cards";
import { ba } from "../../../public/imageUrl";

export default function BA() {
  return (
    <>
      <div className="sections">
        <Cards title="Ba 1" userLinks="/Ba1" cardImagelink={ba} />
        <Cards title="Ba 2" userLinks="/Ba2" cardImagelink={ba} />
        <Cards title="Ba 3" userLinks="/Ba3" cardImagelink={ba} />
      </div>
    </>
  );
}
