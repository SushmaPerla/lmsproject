// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import MenuList from "../components/MenuList";
import { Button } from "antd/es/radio";
import S_menulist from "../S_components/S_menulist";
import Navbar from "../S_components/Navbar";
// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const S_Daytodayreport = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <Navbar />
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

              <div className="s_daytodayreport-section">
                <h2>Day To Day Report</h2>
                <form>
                  <label htmlFor="s_daytodayreport">Post Report:</label>
                  <br />
                  <textarea
                    id="s_daytodayreport"
                    name="s_daytodayreport"
                    rows="10"
                    cols="80"
                  ></textarea>
                  <br />
                  <br />
                  <button type="submit">Submit Report</button>
                </form>
              </div>
              <br />
            </main>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default S_Daytodayreport;
