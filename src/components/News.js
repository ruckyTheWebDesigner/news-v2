import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function News() {
  return (
    <div>
      <Navbar />
      <div className='news'>
        <h4>Latest News</h4>
      </div>
      <Footer />
    </div>
  );
}

export default News;
