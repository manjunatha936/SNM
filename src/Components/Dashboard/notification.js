
import { Col, Row, Badge, Avatar, Select, Dropdown, Space } from "antd";
import { React } from "react";
import {
  BellOutlined,
} from "@ant-design/icons";

const NotificationDropdown = () => {
 
    const items = [
        {
          label: "Notification 1",
          key: "0",
        },
        {
          label: "Notification 2",
          key: "1",
        },
      ];


  return (
    <>
      <Dropdown
              menu={{
                items,
              }}
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Badge count={5} size="small">
                    <BellOutlined
                      style={{
                        color: "#ffffff",
                        fontSize: "20px",
                        marginLeft: "25px",
                      }}
                    />
                  </Badge>
                </Space>
              </a>
            </Dropdown>
    </>
  );
};

export default NotificationDropdown;
