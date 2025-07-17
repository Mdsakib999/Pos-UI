import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopButton";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
