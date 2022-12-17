import "./AppLayout.scss";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import CustomLink from "../CustomLink/CustomLink";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";
import { IoCaretBack, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function AppLayout({ detail = false }) {
  const [hamMenu, sethamMenu] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  //close dropdown on resize
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);

      if (innerWidth > 800) {
        sethamMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);

  return (
    <div id="page">
      <div id="nav-background">
        <div className="container">
          <div id="navbar">
            {hamMenu ? (
              <IoCloseOutline
                className="ham-menu-icon"
                onClick={() => sethamMenu((prev) => !prev)}
              />
            ) : (
              <IoMenuOutline
                className="ham-menu-icon"
                onClick={() => sethamMenu((prev) => !prev)}
              />
            )}
            {detail && innerWidth > 800 && (
              <>
                <Link to="/home">
                  <div className="back-btn">
                    <IoCaretBack size={23} />
                    <span>Library</span>
                  </div>
                </Link>
              </>
            )}
            {!detail && innerWidth > 800 && <Logo id="logo" />}
            {innerWidth < 800 ? <Logo id="logo" /> : null}
            <nav id="links">
              <CustomLink to={"/home"}>Library</CustomLink>

              <CustomLink to={"/home/settings"}>Settings</CustomLink>
            </nav>
            <div className="edge-container">
              <ProfileIcon id="profile" onClick={() => dispatch(logout())} />
            </div>
          </div>
        </div>
        {hamMenu && (
          <nav id="links-ham">
            <CustomLink to={"/home"}>Library</CustomLink>

            <CustomLink to={"/home/settings"}>Settings</CustomLink>
          </nav>
        )}
      </div>
      {detail && innerWidth < 800 && (
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="back-btn">
            <IoCaretBack size={23} />
            <span>Library</span>
          </div>
        </Link>
      )}
      <Outlet style={{ "z-index": 5 }} />
    </div>
  );
}

export default AppLayout;
