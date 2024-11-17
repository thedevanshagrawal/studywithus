import Cards from "../../components/Cards";
import Notes from "../Notes";
import { btech } from "../../../public/imageUrl";

export function Btech2() {
  return (
    <>
      <div className="sections">
        <Cards
          title="Sem 1"
          userLinks="/btech2/btech2sem1"
          cardImagelink={btech}
        />
        <Cards
          title="Sem 2"
          userLinks="/btech2/btech2sem2"
          cardImagelink={btech}
        />
      </div>
    </>
  );
}

export function Btech2Sem1() {
  return (
    <Notes
      note1="OOOPs"
      url1="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      note2="Technical Report writing"
      url2="https://drive.google.com/drive/folders/123AX8HHIy4Z4Yh-ke64hxWcALNz_w6Ox?usp=sharing"
      note3="DLD"
      url3="https://drive.google.com/drive/folders/1tyE0cLGI7LYVKEyswMPEXbFhwvlD3wtw?usp=drive_link"
      note4="Measurment Techniques"
      url4="https://drive.google.com/drive/folders/1NgYuBC-7Wv888Q7N_D9HjX-PD03LU85h?usp=drive_link"
      note5="Electrical Science"
      url5="https://drive.google.com/drive/folders/1z2FlBcfTaxzIu0sAkKA9wSdSofR6MrO7?usp=drive_link"
      note6="maths"
      url6="https://drive.google.com/drive/folders/1okPcpA6XSCEZlKJ9uz-boASfxqV_pJNO?usp=drive_link"
    />
  );
}

export function Btech2Sem2() {
  return (
    <Notes
      note1="DBMS"
      url1="https://drive.google.com/drive/folders/1YuQmFA5PMb3GGM7uMkwOPCiVW47s6D1y?usp=sharing"
      note2="Principle of Management"
      url2="https://drive.google.com/drive/folders/1SEndzPzEqrmoaG4_KL1Udf7SRCComsWC?usp=sharing"
      note3="Operation Research"
      url3="https://drive.google.com/drive/folders/1qTiuXsRZRHviIdBcNVyKFaylbdY2FZG5?usp=sharing"
      note4="Operating System"
      url4="https://drive.google.com/drive/folders/1-iXrUZiX9uaaULkRjIFLsKwJlrP_105X?usp=sharing"
      note5="Electrical Science"
      url5="https://drive.google.com/drive/folders/1Zu0eaL_LXta4s8hXt96BB_0275sO5mBR?usp=sharing"
      note6="Web Tech"
      url6="https://drive.google.com/drive/folders/1ueJfP2_7xCv1c1B2icIOhw09sRiUQxe4?usp=sharing"
    />
  );
}
