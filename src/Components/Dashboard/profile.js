
import { Col, Row, Badge, Avatar, Select, Dropdown, Space } from "antd";
import { React } from "react";
import {
  BellOutlined,
} from "@ant-design/icons";

const ProfileDropdown = () => {
 
  
    const items = [
        {
          label: "Profile",
          key: "0",
        },
        {
          label: "Logout",
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
                  <Avatar
                    style={{
                      background: "#ffffff",
                      marginRight: "4px",
                      marginLeft: "25px",
                    }}
                    src="/assets/dashboard/profile.png"
                  />
                  <span style={{ color: "#ffffff", fontSize: "14px" }}>
                  Serati Ma
                  </span>
                </Space>
              </a>
            </Dropdown>
    </>
  );
};

export default ProfileDropdown;
