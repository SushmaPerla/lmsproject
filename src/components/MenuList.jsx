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

const MenuList = (darkTheme) => {
  return (
    <div>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar"
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/" /> Home
        </Menu.Item>

        <Menu.Item key="timetable" icon={<AppstoreOutlined />}>
          <Link to="/timetable" /> Timetable
        </Menu.Item>

        <Menu.SubMenu
          key="assignments"
          icon={<BarsOutlined />}
          title="Assignments"
        >
          <Menu.Item key="assign">
            <Link to="/assign" />
            Assign
          </Menu.Item>
          <Menu.Item key="validate">
            <Link to="/validate" /> Validate
          </Menu.Item>
          <Menu.SubMenu key="studentsinfo" title="Students info">
            <Menu.Item key="years">Years</Menu.Item>
            <Menu.Item key="branches">Branches </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="daytodayreport" icon={<AreaChartOutlined />}>
          <Link to="/daytodayreport" /> Day to day report
        </Menu.Item>
        <Menu.Item key="syllabus" icon={<PayCircleOutlined />}>
          Syllabus
        </Menu.Item>
        <Menu.Item key="feedback" icon={<SettingOutlined />}>
          <Link to="/feedback" /> Feedback
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuList;
