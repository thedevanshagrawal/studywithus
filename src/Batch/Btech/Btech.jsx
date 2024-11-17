import Cards from "../../components/Cards";
import { btech } from "../../../public/imageUrl";

function Btech() {
  return (
    <>
      <>
        <div className="sections">
          <Cards title="Btech 1" userLinks="/btech1" cardImagelink={btech} />
          <Cards title="Btech 2" userLinks="/btech2" cardImagelink={btech} />
        </div>
      </>
      <>
        <div className="sections">
          <Cards title="Btech 3" userLinks="/btech3" cardImagelink={btech} />
          <Cards title="Btech 4" userLinks="/btech4" cardImagelink={btech} />
        </div>
      </>
    </>
  );
}

export default Btech;
