import "./AppLayout.scss";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import CustomLink from "../CustomLink/CustomLink";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";

function AppLayout() {
  const dispatch = useDispatch();
  return (
    <div id="page">
      <div id="nav-background">
        <div className="container">
          <div id="navbar">
            <Logo id="logo" />

            <nav id="links">
              <CustomLink to={"/home"}>Library</CustomLink>

              <CustomLink to={"/home/settings"}>Settings</CustomLink>
            </nav>
            <div className="edge-container">
              <ProfileIcon id="profile" onClick={() => dispatch(logout())} />
            </div>
          </div>
        </div>
      </div>
      <Outlet style={{ "z-index": 5 }} />
    </div>
  );
}

export default AppLayout;
