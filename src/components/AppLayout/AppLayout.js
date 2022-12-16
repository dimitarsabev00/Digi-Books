import "./AppLayout.scss";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import CustomLink from "../CustomLink/CustomLink";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";
import { IoCaretBack } from "react-icons/io5";

function AppLayout({ detail = false }) {
  const dispatch = useDispatch();
  return (
    <div id="page">
      <div id="nav-background">
        <div className="container">
          <div id="navbar">
            {detail ? (
              <Link to="/home">
                <div className="back-btn">
                  <IoCaretBack size={23} />
                  <span>Library</span>
                </div>
              </Link>
            ) : (
              <Logo id="logo" />
            )}

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
