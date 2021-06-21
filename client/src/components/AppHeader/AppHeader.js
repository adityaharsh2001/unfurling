import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import classes from "./AppHeader.module.css";
import { Switch } from "antd";
import "antd/dist/antd.css";

const AppHeader = ({ themeValue, themeHandler, filterHandler }) => {
  const menu = (
    <Menu>
      <Menu.Item onClick={filterHandler} value="none">
        Normal
      </Menu.Item>
      <Menu.Item onClick={filterHandler} value="grayscale(100%)">
        Grayscale
      </Menu.Item>
      <Menu.Item onClick={filterHandler} value="sepia(100%)">
        Sepia
      </Menu.Item>
      <Menu.Item onClick={filterHandler} value="invert(100%)">
        Invert
      </Menu.Item>

      <Menu.Item onClick={filterHandler} value="hue-rotate(90deg)">
        Hue
      </Menu.Item>
      <Menu.Item onClick={filterHandler} value="contrast(200%)">
        Contrast
      </Menu.Item>
    </Menu>
  );
  const onToggle = (checked) => {
    themeHandler(checked);
  };
  // eslint-disable-next-line no-lone-blocks
  {
    if (themeValue) document.body.style.backgroundColor = "#303030";
    else document.body.style.backgroundColor = "#a5a5a57a";
  }
  return (
    <header
      className={`${classes.header} ${themeValue && classes.header__dark}`}
    >
      <Dropdown overlay={menu}>
        <span
          className={`ant-dropdown-link ${classes.nav} `}
          onClick={(e) => e.preventDefault()}
        >
          Filter <DownOutlined />
        </span>
      </Dropdown>
      <Switch
        defaultunChecked
        onChange={onToggle}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </header>
  );
};

export default AppHeader;
