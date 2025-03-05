import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { ClipLoader } from "react-spinners"; // Loader kutubxonasi

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2100);
  }, []);

  return (
    <div className="app_container">
      {loading ? (
        <div className="loader_container">
          <ClipLoader color="#4EE1A0" size={50} />
        </div>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
