// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import PMenuList from "../PComponents/PMenulist";
import { Button } from "antd/es/radio";
import PNavbar from '../PComponents/PNavbar'

// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const PAttendance = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <PNavbar />
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
              <div>
                <div className="container mx-auto px-4 py-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800 text-center">
                      Attendance
                    </h1>
                    <div className="flex items-center">
                      {/* Add icon here */}
                      <span className="text-gray-500 text-sm mr-2">
                        Early Warning Summary
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-100 rounded-lg px-4 py-4">
                    {/* <h3 className="text-2xl font-medium text-bold text-gray-800">
                  STUDENT SUMMARY
                </h3> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {/* <div className="flex flex-col items-center">
                    <span className="bg-blue-300 text-gray-500 text-sm mr-2">
                      Early Warning Student
                    </span>
                    <span className="flex-grow text-gray-800"></span>
                  </div> */}
                      <div className="bg-black flex flex-col flex-grow items-center p-3 hover:translate-x-1 hover:translate-y-1 rounded-2xl h-32">
                        <span className=" text-white text-xl">
                          Total Enrolled Days
                        </span>
                        <br />
                        <div className="flex flex-grow h-screen  p-4 rounded text-white">
                          174
                        </div>
                      </div>
                      <div className="bg-black flex flex-col flex-grow items-center p-3 hover:translate-x-1 hover:translate-y-1 rounded-2xl h-32">
                        <span className=" text-white text-xl">
                          Total Excused Absence
                        </span>
                        <br />
                        <div className="flex flex-grow h-screen  p-4 rounded text-white">
                          00
                        </div>
                      </div>
                      <div className="bg-black flex flex-col flex-grow items-center p-3 hover:translate-x-1 hover:translate-y-1 rounded-2xl h-32">
                        <span className=" text-white text-xl">
                          Total Unexcused Absence
                        </span>
                        <br />
                        <div className="flex flex-grow h-screen  p-4 rounded text-white">
                          28
                        </div>
                      </div>
                      <div className="bg-black flex flex-col flex-grow items-center p-3 hover:translate-x-1 hover:translate-y-1 rounded-2xl h-32">
                        <span className=" text-white text-xl">Percentage</span>
                        <br />
                        <div className="flex flex-grow h-screen  p-4 rounded text-white">
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
            </main>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default PAttendance;
