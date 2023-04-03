import Home from "./pages/Home";
import AllCocktails from "./pages/AllCocktails";
import SingleCocktail from "./pages/SingleCocktail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-cocktails" element={<AllCocktails />} />
      <Route path="/cocktails/:id" element={<SingleCocktail />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;





