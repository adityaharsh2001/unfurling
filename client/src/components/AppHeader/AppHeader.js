import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import classes from "./AppHeader.module.css";
import { Switch } from "antd";
import "antd/dist/antd.css";
import VideoContext from "../../context/VideoContext";
const AppHeader = ({ themeValue, themeHandler, filterHandler }) => {
  const { callAccepted } = useContext(VideoContext);
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
  window.addEventListener("load", () => {
    let clock = document.getElementById("clock");
    setInterval(() => {
      let date = new Date();
      clock.innerHTML = "Time : " + date.toLocaleTimeString();
    });
  });

  let seconds = 0;
  let hours = 0;
  let minutes = 0;

  if (callAccepted) {
    let clock = document.getElementById("clock");
    setInterval(() => {
      let date = new Date();
      clock.innerHTML = "Time : " +  date.toLocaleTimeString();
    });
    
    window.setInterval(callduration, 1000);
  }

  function callduration() {
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
    document.getElementById("calltime").innerHTML =
      "Call Duration : " + hours + ":" + minutes + ":" + seconds;
  }

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
      {callAccepted ? (
        <>
          <div id="clock">Time : </div>
          <div id="calltime"></div>
        </>
      ) : (
        <div id="clock">Meet Duration : </div>
      )}
      {/* <div id="clock">00:00:00</div>
      <div id="calltime"></div> */}
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
