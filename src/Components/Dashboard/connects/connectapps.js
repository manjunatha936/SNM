import { Card, Row, Col } from "antd";
import {
  RightOutlined,
  LoadingOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Switch } from "antd";
import { Spin } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStepAction } from "@/pages/store/index";

const ConnectApps = (props) => {
  const dispatch = useDispatch();
  const [Sync, setSync] = useState(false);
  const [Synced, setSynced] = useState(false);
  const [Propval, setPropVal] = useState({});

  const { Appstep } = useSelector((state) => state.Appstep);
  const [step, setStep] = useState(Appstep.step);
  const antIcon = (
    <SyncOutlined
      style={{
        fontSize: 30,
        color: "#4ECB73",
      }}
      spin
    />
  );

  const AppImgs = [
    {
      src: "/assets/dashboard/img1.svg",
    },
    {
      src: "/assets/dashboard/img2.svg",
    },
    {
      src: "/assets/dashboard/img3.svg",
    },
    {
      src: "/assets/dashboard/img4.svg",
    },
  ];

  const SwitchChange = (checked) => {
    setSync(checked);

    setTimeout(() => {
      dispatch(AppStepAction.handleStepData({ key: "step", value: step + 1 }));
    }, 2000);
  };

  return (
    <>
      <Card
        className="sn-dashboard-card"
        style={{
          width: 554,
        }}
        // ref={switchClick}
      >
        <Row
          className="sn-dashboard-card__body"
          style={{ minHeight: "130px" }}
          dblock
        >
          <Col
            md={{
              span: 24,
              offset: 0,
            }}
          >
            <Row align={"middle"}>
              <Col
                md={{
                  span: 20,
                  offset: 0,
                }}
              >
                <h5
                  className="f-16 f-500"
                  style={{ color: "rgba(0, 0, 0, 0.85)" }}
                >
                  Demo Chomp
                </h5>
              </Col>
              <Col
                md={{
                  span: 1,
                  offset: 3,
                }}
              >
                <RightOutlined />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="sn-dashboard-card__footer">
          <Col
            md={{
              span: 10,
              offset: 0,
            }}
          >
            <ul className="apps-list">
              {AppImgs.map((item, key) => (
                <li className="apps-list__item">
                  <Image src={item.src} alt="Logo" width={40} height={30} />
                </li>
              ))}
            </ul>
          </Col>
          <Col
            md={{
              span: 8,
              offset: 2,
            }}
          >
            <Row align={"middle"}>
              {Sync ? (
                <>
                  <Spin indicator={antIcon} />
                  <span>&nbsp;&nbsp;Initializing sync..</span>
                </>
              ) : (
                ""
              )}

              {Synced ? (
                <>
                  <CheckCircleOutlined
                    style={{
                      fontSize: 30,
                      color: "#4ECB73",
                    }}
                  />
                  <span>&nbsp;&nbsp;Synced</span>
                </>
              ) : (
                ""
              )}
            </Row>
          </Col>
          <Col
            md={{
              span: 2,
              offset: 2,
            }}
          >
            {}

            <Switch onChange={SwitchChange} />
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default ConnectApps;
