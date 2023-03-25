import Image from "next/image";
import { Col, Row, Badge, Avatar } from "antd";
import { React } from "react";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";

const DashboardHeader = () => {
  return (
    <>
      <Row className="sn-nav" align="middle">
        <Col
          md={{
            span: 3,
            offset: 0,
          }}
        >
          <Image
            src="/assets/dashboard/SNM-Logo.svg"
            alt="Logo"
            width={40}
            height={20}
          />
        </Col>

        <Col
          md={{
            span: 11,
            offset: 10,
          }}
        >
          <Row justify="end" align="middle">
            <SearchOutlined
              style={{ color: "#ffffff", fontSize: "20px", marginLeft: "25px" }}
            />
            <QuestionCircleOutlined
              style={{ color: "#ffffff", fontSize: "20px", marginLeft: "25px" }}
            />
            <Badge count={5} size="small">
              <BellOutlined
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  marginLeft: "25px",
                }}
              />
            </Badge>
            <Avatar  style={{ background: "#ffffff", marginRight: "8px", marginLeft: "25px"}} src="/assets/dashboard/profile.png" />
            <span style={{ color: "#ffffff", fontSize: "14px"}}>Umesh</span>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default DashboardHeader;
