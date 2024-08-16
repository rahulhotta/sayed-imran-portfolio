"use client";
import React from "react";
import "./home.scss";
import Image from "next/image";
import Lottie from "lottie-react";
import helloAnimation from "../../public/assets/Animations/helloAnimation.json";
import IconHoverEffect from "../Effects/IconHoverEffect/IconHoverEffect";
import ActionButton from "../Effects/actionButton/actionButton";
import DownloadButton from "../Effects/downloadButton/downloadButton";
import { LinkedinFilled, MediumCircleFilled, GithubFilled } from "@ant-design/icons";
function Home({scroll}) {
  console.log("scroll funtion: ",scroll)
  return (
    <>
    <div className="home_container">
      <div className="left_container">
        <span className="social_media_container">
          
          <IconHoverEffect url="https://www.github.com/sayed-imran" title="Git Hub">
            <GithubFilled />
          </IconHoverEffect>
          <IconHoverEffect url="https://sayed-imran.medium.com/" title="Medium" >
            <MediumCircleFilled />
          </IconHoverEffect>
          <IconHoverEffect url="https://www.linkedin.com/in/sayed-imran/" title="LinkedIn">
          <LinkedinFilled />
          </IconHoverEffect>
        </span>
        <h1>
          <span>
            Hi
            <Lottie animationData={helloAnimation} className="animation" /> I am
          </span>
          <i className="name"> Sayed Imran</i>
        </h1>
        <span className="home_description">
        I am a skilled DevOps Engineer with over a year of experience in automation, cloud infrastructure, and CI/CD pipelines, leveraging tools like Kubernetes, Docker, and Terraform. I am certified in CKAD and Cloud Architecture, emphasizing my expertise and commitment to innovation.

        </span>
        {/* <div className="home_button_container">
          <ActionButton clickHandler={scroll} />
          <DownloadButton />
        </div> */}
      </div>
      <div className="right_container">
        <div className="blob">
          <Image
            src="/assets/images/home_image4.png"
            className="home_image"
            width={500}
            height={500}
            alt="Sayed Imran"
            layout="responsive"
            
          />
        </div>
        <div className="magicpattern"></div>
      </div>
      <Image
            src="/assets/Backgrounds/wave1.svg"
            className="wave"
            width={500}
            height={500}
            alt="Sayed Imran"
            layout="responsive"
          />
    </div>
    
    </>
  );
}

export default Home;
