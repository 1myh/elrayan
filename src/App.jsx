import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Slider from "./components/Slider";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import mdSlide1 from "./images/mdSlide1.jpg"
import mdSlide2 from "./images/mdSlide2.jpg"
import mdSlide3 from "./images/mdSlide3.jpg"
import specialOffers from "./images/percent.jpg";
import mobile from "./images/specialOffers.jpg";
import gaming from "./images/gaming.jpg";
import giftCards from "./images/giftCards.jpg"
import airConditioner from "./images/airConditioner.jpg";
import watches from "./images/watches.jpg";
import perfumes from "./images/perfumes.jpg";
import makeup from "./images/makeup.jpg";
import SmallerSlider from "./components/SmallerSlider";
import OrangeDiv from "./components/OrangeDiv";
import PurpleDiv from "./components/PurpleDiv";
import GreenDiv from "./components/GreenDiv";
import BlueDiv from "./components/BlueDiv"
import Footer from "./components/Footer";
import EvenMoreSliders from "./components/EvenMoreSliders";

const App = () => {
  let [imgs, setImgs] = useState(window.innerWidth > 1200 ? [slide1, slide2, slide3] : [mdSlide1, mdSlide2, mdSlide3]);
  let tinyImgs = [
    {name: "specialOffers", image: specialOffers},
    {name: "mobile", image: mobile},
    {name: "gaming", image: gaming},
    {name: "airConditioner", image: airConditioner},
    {name: "giftCards", image: giftCards},
    {name: "watches", image: watches},
    {name: "perfumes", image: perfumes},
    {name: "makeup", image: makeup},
  ];
/*   let tinyImgs = [
    {name: specialOffers, id: 1},
    {name: mobile, id: 2},
    {name: gaming, id: 3},
    {name: airConditioner, id: 4},
    {name: giftCards, id: 5},
    {name: watches, id: 6},
    {name: perfumes, id: 7},
    {name: makeup, id: 8},
  ]; */

  let handleHeroImage = () => {
    if (window.innerWidth > 1200) {
      setImgs([slide1, slide2, slide3])
    } else {
      setImgs([mdSlide1, mdSlide2, mdSlide3])
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleHeroImage)

    return () => window.removeEventListener('resize', handleHeroImage)
  }, [])

  return (
    <div className={`flex justify-center items-center flex-col`}>
      <Header />
      <Sections />
      <Slider images={imgs} autoSlide={true} slideEvery={5000} />
      <SmallerSlider images={tinyImgs} />
      <OrangeDiv />
      <PurpleDiv />
      <GreenDiv />
      <BlueDiv />
      <EvenMoreSliders />
      <Footer />
    </div>
  );
};

export default App;
