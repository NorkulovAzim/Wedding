import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Members from "./components/Members";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
};

export default App;
