import Cards from "../../components/Cards";
import Notes from "../Notes";
import { bca } from "../../../public/imageUrl";

export function Bca1() {
  return (
    <>
      <div className="sections">
        <Cards title="Sem 1" userLinks="/bca1/Bca1Sem1" cardImagelink={bca} />
        <Cards title="Sem 2" userLinks="/bca1/Bca1Sem2" cardImagelink={bca} />
      </div>
    </>
  );
}

export function Bca1Sem1() {
  return (
    <Notes
      note1="C Programming"
      url1="https://drive.google.com/drive/folders/1oM6OSDJ3VhepE_zzb-10hmBetHpRp85Y?usp=drive_link"
      note2="Internet Technology"
      url2="https://drive.google.com/drive/folders/1895-4EiJb7dVBJOy-7HgtIHNOIRUB19O?usp=drive_link"
      note3="Principle of Managment"
      url3="https://drive.google.com/drive/folders/1TNQX-gKT1K_XYVUVN9QaaVdI46uD814N?usp=drive_link"
      note4="Maths"
      url4="https://drive.google.com/drive/folders/1RNn3n2ZxkkZOzA1zUpZ_B8c-5dGiIjuA?usp=sharing"

      // note4="Measurment Techniques"
      // url4="https://drive.google.com/drive/folders/1NgYuBC-7Wv888Q7N_D9HjX-PD03LU85h?usp=drive_link"

      // note5="Electrical Science"
      // url5="https://drive.google.com/drive/folders/1z2FlBcfTaxzIu0sAkKA9wSdSofR6MrO7?usp=drive_link"

      // note6="maths"
      // url6="https://drive.google.com/drive/folders/1okPcpA6XSCEZlKJ9uz-boASfxqV_pJNO?usp=drive_link"
    />
  );
}

export function Bca1Sem2() {
  return (
    <Notes
      note1="OOPs"
      url1="https://drive.google.com/drive/folders/1j_fM8_rVDwCg0nYhoIp7Eoe6TMnOedWz?usp=sharing"
      // note2="Internet Technology"
      // url2="https://drive.google.com/drive/folders/1895-4EiJb7dVBJOy-7HgtIHNOIRUB19O?usp=drive_link"

      // note3="Principle of Managment"
      // url3="https://drive.google.com/drive/folders/1TNQX-gKT1K_XYVUVN9QaaVdI46uD814N?usp=drive_link"

      note4="upcoming"

      // note4="Measurment Techniques"
      // url4="https://drive.google.com/drive/folders/1NgYuBC-7Wv888Q7N_D9HjX-PD03LU85h?usp=drive_link"

      // note5="Electrical Science"
      // url5="https://drive.google.com/drive/folders/1z2FlBcfTaxzIu0sAkKA9wSdSofR6MrO7?usp=drive_link"

      // note6="maths"
      // url6="https://drive.google.com/drive/folders/1okPcpA6XSCEZlKJ9uz-boASfxqV_pJNO?usp=drive_link"
    />
  );
}
