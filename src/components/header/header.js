import React from "react";
import "./header.style.scss";

export default function Header(props) {
  return (
    <header data-test="header">
      <div className="wrap">
        <div className="logo" data-test="logo">
          Testing
        </div>
      </div>
    </header>
  );
}
