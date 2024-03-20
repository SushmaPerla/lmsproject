// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import MenuList from "../components/MenuList";
import { Button } from "antd/es/radio";
import S_menulist from "../S_components/S_menulist";
// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const S_Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        theme={"light"} // Adjust theme if desired
        className="sidebar"
      >
        <S_menulist hoverOpenDelay={0} inlineCollapsed={collapsed} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#f0f2f5" }}>
          <Button type="text" className="toggle" onClick={toggleCollapse}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <main className="main">
          {/* Your main content for the Home page goes here */}
          <h1>Welcome to the  Student Home Page!</h1>

          <br />
        </main>
      </Layout>
    </Layout>
  );
};

export default  S_Home;
