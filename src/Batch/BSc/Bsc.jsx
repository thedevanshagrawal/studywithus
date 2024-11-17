import Cards from "../../components/Cards";
import { bsc } from "../../../public/imageUrl";

function Bsc() {
  return (
    <>
      <div className="sections">
        <Cards title="Bsc 1" userLinks="/Bsc1" cardImagelink={bsc} />
        <Cards title="Bsc 2" userLinks="/Bsc2" cardImagelink={bsc} />
        <Cards title="Bsc 3" userLinks="/Bsc3" cardImagelink={bsc} />
      </div>
    </>
  );
}

export default Bsc;
