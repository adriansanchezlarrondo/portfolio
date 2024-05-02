import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Skills from "./views/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
