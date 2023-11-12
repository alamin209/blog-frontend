import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomePost from "./components/HomePosts";
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<HomePost />}></Route>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
