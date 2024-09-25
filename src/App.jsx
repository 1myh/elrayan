import React from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Slider from "./components/Slider";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
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

const App = () => {
  let imgs = [slide1, slide2];
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

  return (
    <div className={`bg-red h-screen w-screen`}>
      <Header />
      <Sections />
      <Slider images={imgs} />
      <SmallerSlider images={tinyImgs} />
      <OrangeDiv />
      <PurpleDiv />
      <GreenDiv />
      <BlueDiv />
    </div>
  );
};

export default App;
