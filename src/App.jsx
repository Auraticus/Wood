import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/gallery" element={<h1>Gallery Page</h1>} />
        <Route path="/prices" element={<h1>Prices for Services</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/" element={<h1>Welcome to MySite</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
