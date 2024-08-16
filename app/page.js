'use client'
import Image from "next/image";
import "./page.scss";
import Home from "./home/home";
import Badges from "./badges/badges";
export default function Main() {

  const scrollToBadges = () => {
    console.log("function called")
    const target = document.getElementById('badgeComponent');
    const offsetTop = target.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <main className='main'>
      <Home scroll={scrollToBadges} />
      <Badges  />
    </main>
  );
}
