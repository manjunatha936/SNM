import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    FormOutlined,
    CheckCircleOutlined,
    UnorderedListOutlined,
    WarningOutlined,
    UserOutlined,
    HighlightOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme, Button } from "antd";
import { useState, React } from "react";
import NaviGation from "./navigation";
import Connects from "@/Components/Dashboard/connects/connect";
import ConnectedApps from "./connects/connectedapps";
import { useDispatch, useSelector } from "react-redux";
import { AppStepAction }  from "@/pages/store/index";



const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [

    getItem("Dashbaord", "sub1", <DashboardOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Tom", "3"),
        getItem("Bill", "4"),
        getItem("Alex", "5"),
    ]),
    getItem("Issues", "sub2", <FormOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),
    getItem("Logs", "sub3", <UnorderedListOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),

    getItem("Result", "sub4", <CheckCircleOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),

    getItem("Exception", "sub5", <WarningOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),
    getItem("Account", "sub6", <UserOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),

    getItem("Graphic Editor", "sub7", <HighlightOutlined style={{
        fontSize: "20px"
    }} />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),

];
const DashboardLayout = () => {
    const { Appstep } = useSelector((state) => state.Appstep);
    const [collapsed, setCollapsed] = useState(false);
    const SidebarToggle = () => {
        setCollapsed(!collapsed)
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                height: "calc(100vh - 62px)", overflow: "hidden"
            }}
        >
            <Sider
                className="sn-sidebar"
                width={208}
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ background: "#ffffff" }}
            >
                <Menu className="sn-sidebar-menu"
                    theme="white"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />

                <Button className="sn-sidebar-toggler" type="text" block onClick={SidebarToggle}>
                    {collapsed ? <MenuUnfoldOutlined style={{
                        fontSize: "20px"
                    }} /> : <MenuFoldOutlined style={{
                        fontSize: "20px"
                    }} />}

                </Button>
            </Sider>
            <Layout className="site-layout">
            <NaviGation />
                <Content
>

                    <div className="sn-dashboard-conatiner">
                        {
                            Appstep.connectionlist ?  <ConnectedApps /> :  <Connects />
                        }
                    
                    </div>
                    
                 
                </Content>
                {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
            </Layout>
        </Layout>
    );
};
export default DashboardLayout;
