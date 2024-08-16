import React from "react";
import "./badges.scss";
import badgesJson from "../../public/assets/JSONS/badges.json";
import Image from "next/image";
import { Col, Row } from "antd";
import { GrCertificate } from "react-icons/gr";
import Hover3DEffect from "../Effects/Hover3DEffect/hover3DEffect";
function Badges() {
  return (
    <div className="badges_container" id="badgeComponent"> 
      <div className="badges_left_container">
        <div className="badge_blob">
          <Image
            src='/assets/images/award_bg.png'
            className="awardImage"
            width={500}
            height={500}
            alt="certification"
          />
          <h1>
            Ceritfications
            </h1>
        </div>
      </div>
      <div className="badges_right_container">
        <span className="badge_heading">
          <h1>CERTIFICATIONS</h1>
          <GrCertificate className="certification_icon" />
        </span>
        <Row gutter={[16, 48]}>
          {badgesJson.badges.map((badge) => {
            return (
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={8}
                xl={8}
                key={badge.id}
                className="badgeImgContainer"
              >
                <Hover3DEffect>
                  <Image
                    key={badge.id}
                    src={badge.url}
                    className="badgeImg"
                    width={500}
                    height={500}
                    alt="certification"
                  />
                </Hover3DEffect>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Badges;
