import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import UploadSection from "./components/UploadSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Features />
        <UploadSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
