import { Menu } from "antd";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const PMenuList = (darkTheme) => {
  return (
    <div>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar"
      >
        <Menu.Item key="phome" icon={<HomeOutlined />}>
          <Link to="/phome" /> Home
        </Menu.Item>
        <Menu.Item key="pattendance" icon={<HomeOutlined />}>
          <Link to="/pattendance" /> Attendance
        </Menu.Item>

        <Menu.SubMenu key="presults" icon={<BarsOutlined />} title="Results">
          <Menu.Item key="pyear1">
            <Link to="/pyear1" />
            1st Year
          </Menu.Item>
          <Menu.Item key="pyear2">
            <Link to="/pyear2" /> 2nd Year
          </Menu.Item>
          <Menu.Item key="pyear3">
            <Link to="/pyear3" /> 3rd Year
          </Menu.Item>
          <Menu.Item key="pyear4">
            <Link to="/pyear4" /> 4th Year
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="pbilling" icon={<AppstoreOutlined />}>
          <Link to="/pbilling" /> Billing
        </Menu.Item>
        <Menu.Item key="psemestercalendar" icon={<AreaChartOutlined />}>
          <Link to="/psemestercalendar" /> Semester Calendar
        </Menu.Item>
        <Menu.Item key="pstudentguide" icon={<PayCircleOutlined />}>
          <Link to="/pstudentguide" Student Guide />
          Student Guide
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default PMenuList;
