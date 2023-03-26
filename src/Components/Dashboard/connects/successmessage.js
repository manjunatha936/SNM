
import { Card, Row, Col } from "antd";
import Link from "next/link";
import {
  RightOutlined,
  LoadingOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Switch } from "antd";
import { Spin } from "antd";
import { useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStepAction }  from "@/pages/store/index";


const SuccessMessage = () => {
  const dispatch = useDispatch();


const SwitchConnection = () => {

  setTimeout(() => {
  dispatch(AppStepAction.handleStepData({ key: "connectionlist", value: true }))
}, 500);
}






    return(
        <>
        
           
      <Card
        className="sn-dashboard-card"
        style={{
          width: '100%',
        }}
        // ref={switchClick}
       

       
        
      >
        <Row
            align={'middle'}
          className="sn-dashboard-card__body pt-60"
          style={{ minHeight: "130px" }}
          dblock
        >
          <Col  md={{
              
              offset: 2,
            }}>
                 <Image src='/assets/dashboard/success.png' alt="Logo" width={270} height={270} />
          
          </Col>

          <Col  md={{
              span: 8,
              offset: 2,
            }}>
                 <h5 className="f-40 f-400" style={{marginBottom: "18px"}}>Base created</h5>
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
          
          </Col>
        </Row>

        <Row className="sn-dashboard-card__footer" justify='space-between'>
          <Col
            md={{
              span: 10,
              offset: 0,
            }}
          >
            Enable sinc
          </Col>
         
            
            <Switch onChange={SwitchConnection}/>
             
          
        </Row>
      </Card>
        </>
    )
};

export default SuccessMessage;