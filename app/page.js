'use client'
import Image from "next/image";
import "./page.scss";
import Home from "./home/home";
import Badges from "./badges/badges";
import Blogs from "./Blogs/Blogs";
export default function Main() {


  return (
    <main className='main'>
      <Home />
      <Badges  />
      <Blogs />
    </main>
  );
}
