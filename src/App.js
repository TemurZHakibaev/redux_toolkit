import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import SinglePage from "./components/SinglePage";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          {/*<Route path={"/user/:id"} element={<SinglePage />} />*/}
          <Route path={"/update/:id"} element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
