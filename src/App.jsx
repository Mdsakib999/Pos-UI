import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen">
        <div className="min-h-screen max-w-7xl mx-auto">
          <Outlet />
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default App;
