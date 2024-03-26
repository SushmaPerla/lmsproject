import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MenuList from "../components/MenuList";
import { Button } from "antd/es/radio";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const { Header, Sider } = Layout;

const Timetable = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <Navbar/>
        <Layout>
          <Sider
            collapsed={collapsed}
            collapsible
            theme={"light"} // Adjust theme if desired
            className="sidebar"
          >
            <MenuList hoverOpenDelay={0} inlineCollapsed={collapsed} />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: "#f0f2f5" }}>
              <Button type="text" className="toggle" onClick={toggleCollapse}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Header>
            <main className="main">
              <h1>Welcome to the Timetable Page!</h1>

              <br />
              <Table />
            </main>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Timetable;
