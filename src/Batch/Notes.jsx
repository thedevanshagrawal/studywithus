import React from "react";
import { Link } from "react-router-dom";

function Notes({
  note1,
  note2,
  note3,
  note4,
  note5,
  note6,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
}) {
  return (
    <div className="notesContainer">
      <div className="notesContent">
        <div className="notes">
          <Link to={url1} className="notesLink">
            <span>{note1}</span>
          </Link>
        </div>
      </div>

      <div className="notesContent">
        <div className="notes">
          <Link to={url2} className="notesLink">
            <span>{note2}</span>
          </Link>
        </div>
      </div>

      <div className="notesContent">
        <div className="notes">
          <Link to={url3} className="notesLink">
            <span>{note3}</span>
          </Link>
        </div>
      </div>

      <div className="notesContent">
        <div className="notes">
          <Link to={url4} className="notesLink">
            <span>{note4}</span>
          </Link>
        </div>
      </div>

      <div className="notesContent">
        <div className="notes">
          <Link to={url5} className="notesLink">
            <span>{note5}</span>
          </Link>
        </div>
      </div>

      <div className="notesContent">
        <div className="notes">
          <Link to={url6} className="notesLink">
            <span>{note6}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notes;
