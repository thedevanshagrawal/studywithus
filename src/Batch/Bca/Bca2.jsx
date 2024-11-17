import Cards from "../../components/Cards";
import Notes from "../Notes";
import { bca } from "../../../public/imageUrl";


export function Bca2() {
  return (
    <>
      <div className="sections">
        <Cards title="Sem 1" userLinks="/bca2/Bca2Sem1" cardImagelink={bca} />
        <Cards title="Sem 2" userLinks="/bca2/Bca2Sem2" cardImagelink={bca} />
      </div>
    </>
  );
}

export function Bca2Sem1() {
  return (
    <Notes
      note1="OOOPs"
      url1="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=sharing"
      note2="DBMS"
      url2="https://drive.google.com/drive/folders/1YuQmFA5PMb3GGM7uMkwOPCiVW47s6D1y?usp=sharing"
      note3="Upcoming"
      // url3="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note4="OOOPs"
      // url4="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note5="OOOPs"
      // url5="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note6="OOOPs"
      // url6="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
    />
  );
}

export function Bca2Sem2() {
  return (
    <Notes
      note1="Operation Research"
      url1="https://drive.google.com/drive/folders/1qTiuXsRZRHviIdBcNVyKFaylbdY2FZG5?usp=drive_link"
      note2="Operating System"
      url2="https://drive.google.com/drive/folders/1-iXrUZiX9uaaULkRjIFLsKwJlrP_105X?usp=sharing"
      note3="Technical Report Writing"
      url3="https://drive.google.com/drive/folders/123AX8HHIy4Z4Yh-ke64hxWcALNz_w6Ox?usp=sharing"
      // note4="OOOPs"
      // url4="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note5="OOOPs"
      // url5="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note6="OOOPs"
      // url6="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
    />
  );
}
