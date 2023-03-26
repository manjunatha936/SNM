import { Fragment } from "react";
import { Col, Row, Breadcrumb, Button} from "antd";
import Link from "next/link";

const NaviGation = (props) => {
  return (
    <Fragment>
        <div className="sn-dashboard-nav">
      <Row  style={{marginBottom: "20px"}}>
        <Col
          md={{
            span: 10,
            offset: 0,
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>First-level Menu</Breadcrumb.Item>
            <Breadcrumb.Item>Second-level Menu</Breadcrumb.Item>
            <Breadcrumb.Item>Current Page</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        <Col
          md={{
            span: 10,
            offset: 4,
          }}
        >
          <Row justify="end">
            <ul className="sn-flex-list sn-header-links">
              <li className="sn-header-links__item">
                <Link href="/">Join us on slack</Link>
              </li>
              <li className="sn-header-links__item">
                <Link href="/about">View Whats new</Link>
              </li>
              <li className="sn-header-links__item">
                <Link href="/blog/hello-world">Need Help?</Link>
              </li>
            </ul>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col
         md={{
            span: 10,
            offset: 0,
          }}
        >
            <h3  style={{fontWeight: "500", fontSize: "20px"}}>Dashbaord</h3>
        
        </Col>

        <Col
         md={{
            span: 8,
            offset: 6,
          }}
        >
            <Row
            justify="end"
            >
            <Button type="button" className="sn-btn sn-btn--primary">Create new</Button>
            </Row>
       
        </Col>

      </Row>
      </div>
    </Fragment>
  );
};

export default NaviGation;
