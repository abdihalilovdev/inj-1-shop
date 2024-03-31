import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Favorites from "./page/Favorites";
import Basket from "./page/Basket";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
