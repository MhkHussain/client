import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
const Configuration = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery/>} />
          {/* <Route path="/blogs/:id" element={<BlogsContainers />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Configuration;
