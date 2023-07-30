import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  const [page, setPage] = useState("Home");
  const changePage = (option) => {
    setPage(option);
  };
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <NavBar changePage={changePage} />
      {page === "Home" && <Home />}
      {page === "About" && <About />}
    </div>
  );
}

export default App;
