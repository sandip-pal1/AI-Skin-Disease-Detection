import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PredictComponent from "../components/Predict";

export default function Predict() {
  return (
    <>
      <Navbar />

      <div className="p-8 min-h-[calc(100vh-120px)]">
        <PredictComponent />
      </div>

      <Footer />
    </>
  );
}
