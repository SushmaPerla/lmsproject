import { useState } from "react";
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "./Dashboards/Faculty/components/Logo";
import MenuList from "./Dashboards/Faculty/components/MenuList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import Nav from "./components/Nav";
import Home from "./Dashboards/Faculty/Pages/Home";
import Timetable from "./Dashboards/Faculty/Pages/Timetable";
import Assign from "./Dashboards/Faculty/Pages/Assign";

import AssignValidation from "./Dashboards/Faculty/Pages/AssignValidation";
import Feedbackpage from "./Dashboards/Faculty/Pages/Feedbackpage";
import Daytodayreport from "./Dashboards/Faculty/Pages/Daytodayreport";

const { Header, Sider } = Layout;
// const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarTheme = "light"; // Choose your desired theme: "light" or "dark"

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/assign" element={<Assign />} />
          <Route path="/validate" element={<AssignValidation />} />
          <Route path="/feedback" element={<Feedbackpage />} />
          <Route path="/daytodayreport" element={<Daytodayreport />} />
        </Routes>
      </BrowserRouter>
      {/* <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          theme={sidebarTheme} // Set the desired theme here
          className="sidebar"
        >
          <Logo />
          <MenuList hoverOpenDelay={0} inlineCollapsed={collapsed} />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: "#f0f2f5" }}>
            <Button type="text" className="toggle" onClick={toggleCollapse}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Header>
        </Layout>
      </Layout> */}
    </div>
  );
}

export default App;
