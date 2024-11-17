import Cards from "../../components/Cards";
import { bba } from "../../../public/imageUrl";

function Bba() {
  return (
    <>
      <div className="sections">
        <Cards title="Bba 1" userLinks="/Bba1" cardImagelink={bba} />
        <Cards title="Bba 2" userLinks="/Bba2" cardImagelink={bba} />
        <Cards title="Bba 3" userLinks="/Bba3" cardImagelink={bba} />
      </div>
    </>
  );
}

export default Bba;
