import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import SkeletonLoader from "./components/SkeletonLoader";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;
