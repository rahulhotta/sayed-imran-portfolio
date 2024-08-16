import React from 'react'
import './Card3D.scss';
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import { MediumCircleFilled } from "@ant-design/icons";

function Card3D(props) {
  return (
    <div class="CardContainer3d">
        <div className="parent">
        <div className="card">
            <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                    <MediumCircleFilled />
                </span>

            </div>
            <div className="glass"></div>
            <div className="content">
                <Image
                    src={props.img}
                    width={500}
                    height={500}
                    alt="Sayed Imran"
                    layout="responsive"
                />
                <span className="text">{props.title}</span>
            </div>
            <div className="bottom">
                
                <div className="social-buttons-container">
                    <button className="social-button .social-button1">
                        <a href={props.url} target="_blank" rel="noopener noreferrer" className="link_text">
                            <LuExternalLink />
                        </a>
                    </button>
                </div>
                <div className="view-more">
                    <button className="view-more-button">
                        <a href="https://medium.com/@sayed-imran" target="_blank" rel="noopener noreferrer" className="link_text">
                        Follow Me
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card3D