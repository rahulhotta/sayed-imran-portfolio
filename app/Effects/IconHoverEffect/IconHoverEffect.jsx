import React from "react";
import './IconHoverEffect.scss'
function IconHoverEffect(props) {
  return (
    <div>
      <button className="Btn">
        <a href={props.url} target="_blank"className="svgContainer">
            {props.children}
        </a>
        <span className="BG"></span>
      </button>
    </div>
  );
}

export default IconHoverEffect;
