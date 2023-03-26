import Image from "next/image";
import { Col, Row } from "antd";
import { React } from "react";
import NotificationDropdown from "./notification";
import ProfileDropdown from "./profile";
import SearchBox from "./search";

const DashboardHeader = () => {
  return (
    <>
      <Row className="sn-nav" align={'middle'}>
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
          <Row justify="end" align={'middle'}>
            <SearchBox />

            <NotificationDropdown />

            <ProfileDropdown />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default DashboardHeader;
