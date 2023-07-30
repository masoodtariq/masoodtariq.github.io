import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import ToggleSwitch from "../../components/footer/ToggleSwitch";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          Made by
          <a
            href="https://www.linkedin.com/in/masoodtariq/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: props.theme.imageHighlight,
              textDecoration: "none",
            }}
          >
            {" "}
            Masood Tariq
          </a>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle} /> */}
      </Fade>
    </div>
  );
}
