import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardHome from "./CardHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactForm from "./components/contact/ContactForm";

import Btech from "./Batch/Btech/Btech";
import { Btech1, Btech1Sem1, Btech1Sem2 } from "./Batch/Btech/Btech1";
import { Btech2, Btech2Sem1, Btech2Sem2 } from "./Batch/Btech/Btech2";
import { Btech3, Btech3Sem1, Btech3Sem2 } from "./Batch/Btech/Btech3";
import { Btech4, Btech4Sem1 } from "./Batch/Btech/Btech4";

import Bca from "./Batch/Bca/Bca";
import { Bca1, Bca1Sem1, Bca1Sem2 } from "./Batch/Bca/Bca1";
import { Bca2, Bca2Sem1, Bca2Sem2 } from "./Batch/Bca/Bca2";
import { Bca3, Bca3Sem1, Bca3Sem2 } from "./Batch/Bca/Bca3";

import Bsc from "./Batch/BSc/Bsc";
import { Bsc1, Bsc1Sem1, Bsc1Sem2 } from "./Batch/BSc/Bsc1";
import { Bsc2, Bsc2Sem1, Bsc2Sem2 } from "./Batch/BSc/Bsc2";
import { Bsc3, Bsc3Sem1, Bsc3Sem2 } from "./Batch/BSc/Bsc3";

// import Bba from "./Batch/BBA/Bba";
// import { Bba1, Bba1Sem1, Bba1Sem2 } from "./Batch/Bba/Bba1";
// import { Bba2, Bba2Sem1, Bba2Sem2 } from "./Batch/Bba/Bba2";
// import { Bba3, Bba3Sem1, Bba3Sem2 } from "./Batch/Bba/Bba1";

// import BA from "./Batch/BA/BA";
// import { BA1, BA1Sem1, BA1Sem2 } from "./Batch/BA/BA1";
// import { BA2, BA2Sem1, BA2Sem2 } from "./Batch/BA/BA2";
// import { BA3, BA3Sem1, BA3Sem2 } from "./Batch/BA/BA1";

// import BCom from "./Batch/BCom/BCom";
// import { BCom1, BCom1Sem1, BCom1Sem2 } from "./Batch/BCom/BCom1";
// import { BCom2, BCom2Sem1, BCom2Sem2 } from "./Batch/BCom/BCom2";
// import { BCom3, BCom3Sem1, BCom3Sem2 } from "./Batch/BCom/BCom1";

function App() {
  return (
    <div className="fullContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CardHome />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/btech" element={<Btech />} />
          <Route path="/btech1" element={<Btech1 />} />
          <Route path="/btech1/btech1sem1" element={<Btech1Sem1 />} />
          <Route path="/btech1/btech1sem2" element={<Btech1Sem2 />} />
          <Route path="/btech2" element={<Btech2 />} />
          <Route path="/btech2/btech2sem1" element={<Btech2Sem1 />} />
          <Route path="/btech2/btech2sem2" element={<Btech2Sem2 />} />
          <Route path="/btech3" element={<Btech3 />} />
          <Route path="/btech3/btech3sem1" element={<Btech3Sem1 />} />
          <Route path="/btech3/btech3sem2" element={<Btech3Sem2 />} />
          <Route path="/btech4" element={<Btech4 />} />
          <Route path="/btech4/btech4sem1" element={<Btech4Sem1 />} />

          <Route path="/bca" element={<Bca />} />
          <Route path="/bca1" element={<Bca1 />} />
          <Route path="/bca1/bca1sem1" element={<Bca1Sem1 />} />
          <Route path="/bca1/bca1sem2" element={<Bca1Sem2 />} />
          <Route path="/bca2" element={<Bca2 />} />
          <Route path="/bca2/bca2sem1" element={<Bca2Sem1 />} />
          <Route path="/bca2/bca2sem2" element={<Bca2Sem2 />} />
          <Route path="/bca3" element={<Bca3 />} />
          <Route path="/bca3/bca3sem1" element={<Bca3Sem1 />} />
          <Route path="/bca3/bca3sem2" element={<Bca3Sem2 />} />

          <Route path="/bsc" element={<Bsc />} />
          <Route path="/bsc1" element={<Bsc1 />} />
          <Route path="/bsc1/bsc1sem1" element={<Bsc1Sem1 />} />
          <Route path="/bsc1/bsc1sem2" element={<Bsc1Sem2 />} />
          <Route path="/bsc2" element={<Bsc2 />} />
          <Route path="/bsc2/bsc2sem1" element={<Bsc2Sem1 />} />
          <Route path="/bsc2/bsc2sem2" element={<Bsc2Sem2 />} />
          <Route path="/bsc3" element={<Bsc3 />} />
          <Route path="/bsc3/bsc3sem1" element={<Bsc3Sem1 />} />
          <Route path="/bsc3/bsc3sem2" element={<Bsc3Sem2 />} />

          {/* <Route path="/bba" element={<Bba />} />
          <Route path="/bba1" element={<Bba1 />} />
          <Route path="/bba1/bba1sem1" element={<Bba1Sem1 />} />
          <Route path="/bba1/bba1sem2" element={<Bba1Sem2 />} />
          <Route path="/bba2" element={<Bba2 />} />
          <Route path="/bba2/bba2sem1" element={<Bba2Sem1 />} />
          <Route path="/bba2/bba2sem2" element={<Bba2Sem2 />} />
          <Route path="/bba3" element={<Bba3 />} />
          <Route path="/bba3/bba3sem1" element={<Bba3Sem1 />} />
          <Route path="/bba3/bba3sem2" element={<Bba3Sem2 />} />

          <Route path="/ba" element={<BA />} />
          <Route path="/ba1" element={<BA1 />} />
          <Route path="/ba1/ba1sem1" element={<Ba1Sem1 />} />
          <Route path="/ba1/ba1sem2" element={<Ba1Sem2 />} />
          <Route path="/ba2" element={<BA2 />} />
          <Route path="/ba2/ba2sem1" element={<Ba2Sem1 />} />
          <Route path="/ba2/ba2sem2" element={<Ba2Sem2 />} />
          <Route path="/ba3" element={<BA3 />} />
          <Route path="/ba3/ba3sem1" element={<Ba3Sem1 />} />
          <Route path="/ba3/ba3sem2" element={<Ba3Sem2 />} />

          <Route path="/bcom" element={<BCom />} />
          <Route path="/bcom1" element={<BCom1 />} />
          <Route path="/bcom1/bcom1sem1" element={<BCom1Sem1 />} />
          <Route path="/bcom1/bcom1sem2" element={<BCom1Sem2 />} />
          <Route path="/bcom2" element={<BCom2 />} />
          <Route path="/bcom2/bcom2sem1" element={<BCom2Sem1 />} />
          <Route path="/bcom2/bcom2sem2" element={<BCom2Sem2 />} />
          <Route path="/bcom3" element={<BCom3 />} />
          <Route path="/bcom3/bcom3sem1" element={<BCom3Sem1 />} />
          <Route path="/bcom3/bcom3sem2" element={<BCom3Sem2 />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
