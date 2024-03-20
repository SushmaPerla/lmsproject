// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import PMenuList from "../PComponents/PMenulist";
import { Button } from "antd/es/radio";

// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const PYear3 = () => {
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
        <PMenuList hoverOpenDelay={0} inlineCollapsed={collapsed} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#f0f2f5" }}>
          <Button type="text" className="toggle" onClick={toggleCollapse}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <main className="main">
          {/* Your main content for the Home page goes here */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center pb-4">
              <h1 className="text-3xl font-bold">Year 3 Result</h1>
              <div className="text-sm">
                {/* <span>Date: 2024-01-20</span> */}
                {/* <span className="ml-4">Page 94 of 659</span> */}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center pb-2">
                <span className="font-bold">
                  University Examination Section
                </span>
                <span className="font-bold">
                  JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA
                  VIZIANAGARAM
                </span>
              </div>
              {/* <div className="flex justify-between items-center pb-2">
                <span className="font-bold"></span>
              </div> */}
              <div className="border-t border-b py-4">
                <div className="flex justify-between pb-2">
                  <span className="font-bold">Hall Ticket</span>
                  <span className="font-bold">Full Name</span>
                  <span className="font-bold">Branch</span>
                </div>
                <div className="flex justify-between">
                  <span>20NT1A0577</span>
                  <span>PERLA SUSHMA</span>
                  <span>COMPUTER SCIENCE AND ENGINEERING</span>
                </div>
              </div>
              <div className="border-t border-b py-4">
                <div className="flex justify-between pb-1">
                  <span className="font-medium">SI No</span>
                  <span className="font-medium">Year</span>
                  <span className="font-medium">Semester</span>
                  <span className="font-medium">Credits</span>
                  <span className="font-medium">CGPA</span>
                  <span className="font-medium">P</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between py-1">
                    <span>1</span>
                    <span>3</span>
                    <span>1</span>
                    <span>21</span>
                    <span>7.2</span>
                    <span>7</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>2</span>
                    <span>3</span>
                    <span>2</span>
                    <span>21</span>
                    <span>7.4</span>
                    <span>6</span>
                  </div>
                  {/* ... */}
                </div>
              </div>
              <div className="border-t border-b py-4">
                <div className="flex justify-between pb-1">
                  {/* <span className="font-medium">Total Credits: 21</span> */}
                  <span className="font-medium">SGPA: 7.77</span>
                  <span className="font-medium">Status: PASS</span>
                </div>
              </div>
            </div>
          </div>

          <br />
        </main>
      </Layout>
    </Layout>
  );
};

export default PYear3;
