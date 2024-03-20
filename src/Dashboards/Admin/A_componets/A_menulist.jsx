import { Menu } from "antd";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const A_menulist = (darkTheme) => {
  return (
    <div>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar"
      >
        <Menu.Item key="ahome" icon={<HomeOutlined />}>
          <Link to="/ahome" /> Home
        </Menu.Item>

        <Menu.Item key="a_student_data" icon={<AppstoreOutlined />}>
          <Link to="/a_student_data" /> Students_data
        </Menu.Item>
        <Menu.Item key="a_faculty" icon={<AppstoreOutlined />}>
          <Link to="/a_faculty" /> Faculty_Data
        </Menu.Item>
        <Menu.Item key="a_workers_data" icon={<AppstoreOutlined />}>
          <Link to="/a_workers_data" /> Workers_Data
        </Menu.Item>
        <Menu.Item key="a_transport" icon={<AppstoreOutlined />}>
          <Link to="/a_transport" /> Transport
        </Menu.Item>

        <Menu.Item key="a_bills" icon={<AreaChartOutlined />}>
          <Link to="/a_bills" /> Bills
        </Menu.Item>
        <Menu.SubMenu
          key="a_academics"
          icon={<BarsOutlined />}
          title="Academics"
        >
          <Menu.Item key="a_academics_calender">
            <Link to="/a_academics_calender" />
            Academics_Calender
          </Menu.Item>
          <Menu.Item key="a_results">
            <Link to="/a_results" /> Results
          </Menu.Item>
          <Menu.Item key="a_timetable">
            <Link to="/a_timetable" /> Timetable
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="a_post_updates" icon={<SettingOutlined />}>
          <Link to="/a_post_updates" /> Post_Updates
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default A_menulist;
