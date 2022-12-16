import "./Settings.scss";
import { generalSettings, bookSettings } from "./SettingsLists";
import MenuLine from "../MenuLine/MenuLine";

function Settings() {
  return (
    <div className="settings">
      <div className="settings-container">
        <h2>General Settings</h2>
        <div className="menu">
          {generalSettings.map((title, index) => (
            <MenuLine title={title} key={index} />
          ))}
        </div>
      </div>
      <div className="settings-container">
        <div className="title-container">
          <h2>Book Settings</h2>
          <button>ADD NEW</button>
        </div>

        <div className="menu">
          {bookSettings.map((title, index) => (
            <MenuLine title={title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
