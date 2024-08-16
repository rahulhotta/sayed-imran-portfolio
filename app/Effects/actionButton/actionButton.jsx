import React from "react";
import "./actionButton.scss";
import { ArrowDownOutlined} from "@ant-design/icons";

function ActionButton({clickHandler}) {
  return (
    <div>
      <button  onClick={clickHandler} className="button">
        <ArrowDownOutlined className="downIcon"/>
      </button>
    </div>
  );
}

export default ActionButton;
