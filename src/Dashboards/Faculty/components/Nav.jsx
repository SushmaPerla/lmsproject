import { RiMessage2Fill } from "react-icons/ri";

import { Menu } from "antd";

function Nav() {
  return (
    <div>
      <Menu>
        <Menu.Item key="home" icon={<RiMessage2Fill />}></Menu.Item>
      </Menu>
    </div>
  );
}

export default Nav;
