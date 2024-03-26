// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import A_menulist from "../A_componets/A_menulist";
import { Button } from "antd/es/radio";
import A_navbar from "../A_componets/A_navbar";
// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const A_Post_Updates = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <A_navbar />
        <Layout>
          <Sider
            collapsed={collapsed}
            collapsible
            theme={"light"} // Adjust theme if desired
            className="sidebar"
          >
            <A_menulist hoverOpenDelay={0} inlineCollapsed={collapsed} />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: "#f0f2f5" }}>
              <Button type="text" className="toggle" onClick={toggleCollapse}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Header>
            <main className="main">
              {/* Your main content for the Home page goes here */}

              <div className="post_Results">
                <h1>Post_Updates</h1>
                <form>
                  <label htmlFor="post_academic_calender">_Post_Updates:</label>
                  <br />
                  <textarea
                    id="_post_Updates"
                    name="_Post_Updates"
                    rows="10"
                    cols="80"
                  ></textarea>
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-green-700 w-10"
                  >
                    Post
                  </button>
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

export default A_Post_Updates;
