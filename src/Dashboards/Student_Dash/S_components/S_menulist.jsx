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

const S_menuList = (darkTheme) => {
  return (
    <div>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar"
      >
        <Menu.Item key="shome" icon={<HomeOutlined />}>
          <Link to="/shome" /> Home
        </Menu.Item>
        <Menu.Item key="s_myprofile" icon={<HomeOutlined />}>
          <Link to="/s_myprofile" /> My Profile
        </Menu.Item>

        <Menu.Item key="stimetable" icon={<AppstoreOutlined />}>
          <Link to="/stimetable" /> Timetable
        </Menu.Item>

        <Menu.SubMenu
          key="s_assignments"
          icon={<BarsOutlined />}
          title="Assignments"
        >
          <Menu.Item key="s_assign">
            <Link to="/s_assign" />
            Submit_Assign
          </Menu.Item>
          {/* <Menu.Item key="s_submited">
            <Link to="/s_submited" /> Submited_work
          </Menu.Item> */}
        </Menu.SubMenu>
        <Menu.Item key="s_daytodayreport" icon={<AreaChartOutlined />}>
          <Link to="/s_daytodayreport" /> Day to day report
        </Menu.Item>
        <Menu.Item key="syllabus" icon={<PayCircleOutlined />}>
          Syllabus
        </Menu.Item>
        <Menu.Item key="s_feedback" icon={<SettingOutlined />}>
          <Link to="/s_feedback" /> Feedback
        </Menu.Item>
        <Menu.Item key="s_guide" icon={<SettingOutlined />}>
          <Link to="/s_guide" /> Guide
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default S_menuList;
