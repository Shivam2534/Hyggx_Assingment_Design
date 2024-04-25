import "./App.css";
import SwipeableTemporaryDrawer from "./Components/Navbar/Navbar";
import CustomSeparator from "./Components/HeroSection/Breadcrum";
import HeroSection from "./Components/HeroSection/HeroSection";
import FAQ from "./Components/FAQsection/FAQ";

function App() {
  return (
    <div className=" md:px-28">
      <SwipeableTemporaryDrawer />
      <div className="px-2">
      <CustomSeparator />
      <HeroSection />
      <FAQ/>
      </div>
    </div>
  );
}

export default App;
