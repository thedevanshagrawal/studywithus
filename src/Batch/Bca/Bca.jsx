import Cards from "../../components/Cards";
import { bca } from "../../../public/imageUrl";

function Bca() {
  return (
    <>
      <div className="sections">
        <Cards title="Bca 1" userLinks="/Bca1" cardImagelink={bca} />
        <Cards title="Bca 2" userLinks="/Bca2" cardImagelink={bca} />
        <Cards title="Bca 3" userLinks="/Bca3" cardImagelink={bca} />
      </div>
    </>
  );
}

export default Bca;
