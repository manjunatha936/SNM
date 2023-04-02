import { Avatar, List, Space, Row, Form, Col, Input, Button } from "antd";
import Image from "next/image";
import React from "react";
const data = [
  {
    src: "/assets/dashboard/img4.svg",
    connected: true,
  },

  {
    src: "/assets/dashboard/img3.svg",
    connected: false,
  },

  {
    src: "/assets/dashboard/img2.svg",
    connected: false,
  },
  {
    src: "/assets/dashboard/img1.svg",
    connected: false,
  },
  {
    src: "/assets/dashboard/img4.svg",
    connected: false,
  },
  {
    src: "/assets/dashboard/img2.svg",
    connected: false,
  },
];

const ConnectedApps = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row className="sn-connected-list">
        <List
          itemLayout="vertical"
          style={{ width: "100%" }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="sn-connected-list__item">
              <Form
                className="h-100 ln-ant-form"
                name=""
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row align={"middle"}>
                  <Col
                    md={{
                      span: 12,
                      offset: 0,
                    }}
                  >
                    <Row align={"middle"}>
                      <Col
                        md={{
                          span: 1,
                          offset: 0,
                        }}
                      >
                        <Image
                          src={item.src}
                          alt="Logo"
                          width={40}
                          height={30}
                        />
                      </Col>

                      <Col
                        md={{
                          span: 20,
                          offset: 1,
                        }}
                      >
                        <Row align={"middle"}>
                          <Col
                            md={{
                              span: 16,
                              offset: 0,
                            }}
                          >
                            <Form.Item
                              name="Label1"
                              style={{ marginBottom: "0" }}
                              rules={[
                                {
                                  required: true,
                                  message: "Location required",
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input placeholder="Locations" />
                            </Form.Item>
                          </Col>

                          {item.connected == true ? (
                            <Col
                              md={{
                                span: 8,
                                offset: 0,
                              }}
                            >
                              <span style={{ marginLeft: "16px" }}>
                                Connected apps
                              </span>
                            </Col>
                          ) : (
                            ""
                          )}
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    md={{
                      span: 8,
                      offset: 4,
                    }}
                  >
                    <Row justify="end">
                      <Button
                        htmlType="submit"
                        className="sn-btn sn-btn--secondary"
                      >
                        Create new
                      </Button>
                      <Button
                        htmlType="submit"
                        className="sn-btn sn-btn--primary"
                        style={{ marginLeft: "16px" }}
                      >
                        Create new
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </List.Item>
          )}
        />
      </Row>
    </>
  );
};
export default ConnectedApps;
