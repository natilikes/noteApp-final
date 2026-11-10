import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Trash from "./pages/Trash";
import Drawings from "./pages/Drawings";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/drawings" element={<Drawings />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
