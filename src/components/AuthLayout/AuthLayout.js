import React from "react";
import "./AuthLayout.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import coverPic from "../../assets/cover.png";

function AuthLayout({ children }) {
  return (
    <div id="container">
      <div id="content">
        <Logo title="Digi Books" id="logo" />
        {children}
      </div>
      <img src={coverPic} alt="Cover - bookshelf" />
    </div>
  );
}

export default AuthLayout;
