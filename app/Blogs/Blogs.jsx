import React from "react";
import "./Blogs.scss";
import Image from "next/image";
import Card3D from "../Effects/Card3D/Card3D";
import blogJson from "../../public/assets/JSONS/blogs.json";
import { Col, Row } from "antd";

function Blogs() {
  return (
    <div className="blogs_container">
      <Image
        src="/assets/Backgrounds/wave3.svg"
        width={500}
        height={500}
        alt="Sayed Imran"
        layout="responsive"
      />
      <Row gutter={[16, 48]} className="blog_row">
        {blogJson.blogs.map((blog) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              key={blog.id}
              className="blogItemContaier"
            >
              <Card3D
                key={blog.id}
                url={blog.url}
                title={blog.title}
                img={blog.img}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Blogs;
