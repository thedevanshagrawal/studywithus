import Cards from "../../components/Cards";
import Notes from "../Notes";
import { btech } from "../../../public/imageUrl";

export function Btech1() {
  return (
    <>
      <div className="sections">
        <Cards
          title="Sem 1"
          userLinks="/btech1/btech1sem1"
          cardImagelink={btech}
        />
        <Cards
          title="Sem 2"
          userLinks="/btech1/btech1sem2"
          cardImagelink={btech}
        />
      </div>
    </>
  );
}

export function Btech1Sem1() {
  return (
    <Notes
      // note1="Upcoming"

      note1="C Programming"
      url1="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      note2="Maths"
      url2="https://drive.google.com/drive/folders/1RNn3n2ZxkkZOzA1zUpZ_B8c-5dGiIjuA?usp=sharing"
      note3="Workshop"
      url3="https://drive.google.com/drive/folders/1_y874dRKETjh85WkwQOMPwRSG-BkQgxu?usp=sharing"
      note4="Thermodynamics"
      url4="https://drive.google.com/drive/folders/17-bJomzVleJ6HuqBLBTONKvW0NeE_fms?usp=sharing"
      note5="Physics"
      url5="https://drive.google.com/drive/folders/1Ggu_8de2sjamyTgaET5QQRyLFdwQy3ri?usp=sharing"
      // note6="OOOPs"
      // url6="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
    />
  );
}

export function Btech1Sem2() {
  return (
    <Notes
      note1="OOOPs"
      url1="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=sharing"
      note2="Mechanics"
      url2="https://drive.google.com/drive/folders/101VKZj1b-s-IZXjl3ITMDUIPIkLUtVK2?usp=sharing"
      note3="EVS"
      url3="https://drive.google.com/drive/folders/12A7rtftaIuf8Z33T5k62UJRQiiQ1bYL9?usp=sharing"
      // note4="OOOPs"
      // url4="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note5="OOOPs"
      // url5="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
      // note6="OOOPs"
      // url6="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=drive_link"
    />
  );
}
