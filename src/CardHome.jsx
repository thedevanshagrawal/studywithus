import React from "react";
import Cards from "./components/Cards";
import MainSection from "./components/MainSection";
import { btech, bca, bsc, bba, ba, bcom } from "../public/imageUrl.js";
import { Link } from "react-router-dom";

function CardHome() {
  const batches = [
    {
      id: "Btech",
      title: "Btech",
      image: "/Btetch.jpg",
      link: "/batch/btech",
    },
    {
      id: "Bca",
      title: "Bca",
      image: "/bca.jpg",
      link: "/batch/bca",
    },
  ];

  return (
    <>
      <MainSection />
      <div className="Card-Home-Container">
        <div className="sections Card-Home-Section ">
          {batches.map((batch) => (
            <>
              <div className="card">
                <div className="card-image">
                  <Link to={batch.link}>
                    <img src={batch.image} alt={batch.title} />
                  </Link>
                </div>

                <div className="content">
                  <Link to={batch.link} className="card-title-link">
                    <h2 className="title-h2">{batch.title}</h2>
                  </Link>
                </div>
                <div className="button">
                  <Link to={batch.title} className="card-read-more-link">
                    Read More
                  </Link>
                </div>
              </div>
            </>
          ))}
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
