import { Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={to}
      {...props}
      className={`link-container ${match ? "active" : ""}`}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
