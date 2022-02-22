import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";


import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import List from "./Components/Main/List";




function App() {

  const [info, setInfo] = useState("")

  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<List info={info} setInfo={setInfo} />} />
        <Route path="/Image" element={<Info info={info} />} />
      </Routes>

    <Footer />

    </Router>
  );
}

export default App;
