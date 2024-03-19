import { Menu } from "antd";
import { Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const Pmenulist = (darkTheme) => {
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

        <Menu.Item key="ptimetable" icon={<AppstoreOutlined />}>
          <Link to="/ptimetable" /> Timetable
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
            <Menu.Item key="years">
              <Link to="/years" />
              Years
            </Menu.Item>
            <Menu.Item key="branches">Branches </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="daytodayreport" icon={<AreaChartOutlined />}>
          <Link to="/daytodayreport" /> Day to day report
        </Menu.Item>
        <Menu.Item key="syllabus" icon={<PayCircleOutlined />}>
          Syllabus
        </Menu.Item>
        <Menu.Item key="feedback" icon={<IoIosSettings />}>
          <Link to="/feedback" /> Feedback
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Pmenulist;
