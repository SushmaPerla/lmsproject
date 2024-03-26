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
import Selection from "./Selection";

import PHome from "./Dashboards/Parent/PPages/PHome";
import PSemestercalendar from "./Dashboards/Parent/PPages/PSemestercalendar";
import PAttendance from "./Dashboards/Parent/PPages/PAttendance";
import PBilling from "./Dashboards/Parent/PPages/PBilling";
import PStudentguide from "./Dashboards/Parent/PPages/PStudentguide";
import PProfile from "./Dashboards/Parent/PPages/PProfile";
import PYear1 from "./Dashboards/Parent/PPages/PYear1";
import PYear2 from "./Dashboards/Parent/PPages/PYear2";
import PYear3 from "./Dashboards/Parent/PPages/PYear3";
import PYear4 from "./Dashboards/Parent/PPages/PYear4";
import A_home from "./Dashboards/Admin/A_pages/A_home";
import A_Student_Data from "./Dashboards/Admin/A_pages/A_Student_Data";
import A_Faculty from "./Dashboards/Admin/A_pages/A_Faculty";
import A_Workers_Data from "./Dashboards/Admin/A_pages/A_Workers_Data";
import A_Bills from "./Dashboards/Admin/A_pages/A_Bills";
import A_Transport from "./Dashboards/Admin/A_pages/A_Transport";
import A_Academic_Calender from "./Dashboards/Admin/A_pages/A_Academic_Calender";
import A_Results from "./Dashboards/Admin/A_pages/A_Results";
import A_Timetable from "./Dashboards/Admin/A_pages/A_Timetables";
import A_Post_Updates from "./Dashboards/Admin/A_pages/A_Post_Updates";
import S_Home from "./Dashboards/Student_Dash/S_pages/S_Home";
import S_Timetable from "./Dashboards/Student_Dash/S_pages/S_Timetable";
import S_Assign from "./Dashboards/Student_Dash/S_pages/S_Assign";
import S_Daytodayreport from "./Dashboards/Student_Dash/S_pages/S_Daytodayreport";
import S_feedback from "./Dashboards/Student_Dash/S_pages/S_feedback";
import S_Myprofile from "./Dashboards/Student_Dash/S_pages/S_Myprofile";
import S_Guide from "./Dashboards/Student_Dash/S_pages/S_Guide";
import ALogin from "./Loginform/ALogin";
import PLogin from "./Loginform/PLogin";
import SLogin from "./Loginform/SLogin";
import Loginform from "./Loginform/Loginform";

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
          <Route path="/" element={<Selection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/assign" element={<Assign />} />
          <Route path="/validate" element={<AssignValidation />} />
          <Route path="/feedback" element={<Feedbackpage />} />
          <Route path="/daytodayreport" element={<Daytodayreport />} />
          <Route path="/phome" element={<PHome />} />
          <Route path="/pattendance" element={<PAttendance />} />
          <Route path="/pbilling" element={<PBilling />} />
          <Route path="/pprofile" element={<PProfile />} />
          <Route path="/psemestercalendar" element={<PSemestercalendar />} />
          <Route path="/pstudentguide" element={<PStudentguide />} />
          <Route path="/pyear1" element={<PYear1 />} />
          <Route path="/pyear2" element={<PYear2 />} />
          <Route path="/pyear3" element={<PYear3 />} />
          <Route path="/pyear4" element={<PYear4 />} />
          <Route path="/ahome" element={<A_home />} />
          <Route path="/a_student_data" element={<A_Student_Data />} />
          <Route path="/a_faculty" element={<A_Faculty />} />
          <Route path="/a_workers_data" element={<A_Workers_Data />} />
          <Route path="/a_transport" element={<A_Transport />} />
          <Route path="/a_bills" element={<A_Bills />} />
          <Route
            path="/a_academics_calender"
            element={<A_Academic_Calender />}
          />
          <Route path="/a_results" element={<A_Results />} />
          <Route path="/a_Timetable" element={<A_Timetable />} />
          <Route path="/a_post_updates" element={<A_Post_Updates />} />
          <Route path="/shome" element={<S_Home />} />
          <Route path="/s_myprofile" element={<S_Myprofile />} />
          <Route path="/stimetable" element={<S_Timetable />} />
          <Route path="/s_assign" element={<S_Assign />} />

          <Route path="/s_feedback" element={<S_feedback />} />
          <Route path="/s_daytodayreport" element={<S_Daytodayreport />} />
          <Route path="/s_guide" element={<S_Guide />} />
          <Route path="/alogin" element={<ALogin />} />
          <Route path="/flogin" element={<Loginform />} />
          <Route path="/slogin" element={<SLogin />} />
          <Route path="/plogin" element={<PLogin />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/logout" element={<Selection/>}/>
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

// import { useState } from "react";
// import { Button, Layout } from "antd";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// // import Logo from "./components/Logo";
// // import PMenuList from "./Dashboards/Parent/PComponents/PMenulist";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

// // import Nav from "./components/Nav";
// // import Home from "./Pages/Home";
// import PHome from "./Dashboards/Parent/PPages/PHome";
// import Timetable from "./Pages/Timetable";

// import Assign from "./Pages/Assign";

// import AssignValidation from "./Pages/AssignValidation";
// import FeedbackPage from "./Pages/Feedbackpage";
// import Daytodayreport from "./Pages/Daytodayreport";
// import PSelection from "./Dashboards/Parent/PPages/PSelection";
// import PAttendance from "./Dashboards/Parent/PPages/PAttendance";
// import PBilling from "./Dashboards/Parent/PPages/PBilling";

// const { Header, Sider } = Layout;
// // const { SubMenu } = Menu;

// function App() {
//   const [collapsed, setCollapsed] = useState(false);
//   const sidebarTheme = "light"; // Choose your desired theme: "light" or "dark"

//   const toggleCollapse = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<PSelection />} />
//           <Route path="/phome" element={<PHome />} />
//           <Route path="/pattendance" element={<PAttendance />} />
//           <Route path="/pbilling" element={<PBilling />} />
//           <Route path="/pprofile" element={<Profile />} />
//           <Route path="/psemestercalendar" element={<PSemestercalendar />} />
//           <Route path="/pstudentguide" element={<PStudentguide />} />
//         </Routes>
//       </BrowserRouter>
//       {/* <Layout>
//         <Sider
//           collapsed={collapsed}
//           collapsible
//           theme={sidebarTheme} // Set the desired theme here
//           className="sidebar"
//         >
//           <Logo />
//           <MenuList hoverOpenDelay={0} inlineCollapsed={collapsed} />
//         </Sider>
//         <Layout className="site-layout">
//           <Header style={{ padding: 0, background: "#f0f2f5" }}>
//             <Button type="text" className="toggle" onClick={toggleCollapse}>
//               {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             </Button>
//           </Header>
//         </Layout>
//       </Layout> */}
//     </div>
//   );
// }

// export default App;
