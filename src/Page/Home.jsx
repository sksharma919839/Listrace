import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Hero from "../Commponants/Hero/Hero";
import About from "../Commponants/About/About";
import Works from "../Commponants/Works/Work";
import Explore from "../Commponants/Explore/Explore";
import Review from "../Commponants/Review/Review";
import Count from "../Commponants/Count/Count";
import Blog from "../Commponants/Blog/Blog";
import Contact from "../Commponants/Contact/Contact";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Explore />
      <Review />
      <Count />
      <Blog />
      <Contact />
      <Footer />
      <Scroll />,
    </>
  );
}

export default Home;
