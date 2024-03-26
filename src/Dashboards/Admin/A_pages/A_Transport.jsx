// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import A_menulist from "../A_componets/A_menulist";
import { Button } from "antd/es/radio";
import A_navbar from "../A_componets/A_navbar";
// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const A_Transport = () => {
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
              <div>
                <div className="basis-10/12 ">
                  <table className="border-collapse border border-slate-500 mt-3 ml-2 bg-gray-400">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 p-3">
                          Student_Name
                        </th>
                        <th className="border border-slate-600 p-3">
                          Bus_Stop
                        </th>
                        <th className="border border-slate-600 p-3">
                          Bus_Number
                        </th>
                        <th className="border border-slate-600 p-3">
                          Bus_Driver
                        </th>
                        <th className="border border-slate-600 p-3">Fee_due</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-4"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2"> </td>
                        <td className="border border-slate-700 p-2 "> </td>
                      </tr>
                    </tbody>
                  </table>
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

export default A_Transport;
