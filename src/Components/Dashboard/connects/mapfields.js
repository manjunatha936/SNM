import { Card, Row, Col, Form, Input, Button } from "antd";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppStepAction }  from "@/pages/store/index";
import { useState } from "react";

const MapFieldsApp = (props) => {
    const dispatch = useDispatch();
    const { Appstep } = useSelector((state) => state.Appstep);
    const [step, setStep] = useState(Appstep.step);
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(AppStepAction.handleStepData({ key: "step", value: step + 1 }))
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (
    <>
      <Form
        className="h-100 ln-ant-form"
        name=""
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row align={'middle'} style={{marginBottom: "20px"}}>
          <Image
            src="/assets/dashboard/img4.svg"
            alt="Logo"
            width={40}
            height={30}
          />
          <h4>Demo Chomp</h4>
        </Row>
        <Card
          className="sn-dashboard-card sn-dashboard-card--padding"
          style={{
            width: "100%",
            marginBottom: "18px"
          }}
        >
          <Row>
            <Col
              md={{
                span: 11,
                offset: 0,
              }}
            >
              <label className="sn-lb">Label</label>
              <Form.Item
                name="Label1"
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
            <Col
              md={{
                span: 2,
                offset: 0,
              }}
            >
              
            </Col>
            <Col
              md={{
                span: 11,
                offset: 0,
              }}
            >
              <label className="sn-lb">Label</label>
              <Form.Item
                name="Label2"
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
            <Col
              md={{
                span: 12,
                offset: 0,
              }}
            ></Col>
            <Col
              md={{
                span: 12,
                offset: 0,
              }}
            ></Col>
          </Row>

          <Row>
            <Col
              md={{
                span: 11,
                offset: 0,
              }}
            >
              <label className="sn-lb">Label</label>
              <Form.Item
                name="Label3"
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
            <Col
              md={{
                span: 2,
                offset: 0,
              }}
            >
              <button></button>
            </Col>
            <Col
              md={{
                span: 11,
                offset: 0,
              }}
            >
              <label className="sn-lb">Label</label>
              <Form.Item
                name="Label4"
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
            <Col
              md={{
                span: 12,
                offset: 0,
              }}
            ></Col>
            <Col
              md={{
                span: 12,
                offset: 0,
              }}
            ></Col>
          </Row>
        </Card>
        <Row justify="space-between">
        <Button htmlType="submit" className="sn-btn sn-btn--secondary">Create new</Button>
        <Button htmlType="submit" className="sn-btn sn-btn--primary">Create new</Button>
        </Row>
      </Form>
    </>
  );
};
export default MapFieldsApp;
