import "./MenuLine.scss";
import { IoPlay } from "react-icons/io5";

function MenuLine({ title }) {
  return (
    <div className="line-menu">
      <p>{title}</p>
      <div>
        <hr />
        <IoPlay />
      </div>
    </div>
  );
}

export default MenuLine;
