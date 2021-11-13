import React from "react";
import { Link } from "react-router-dom";
import '../style/HotAccessoriesMenu.css';

const HotAccessoriesMenu = () => {
  return (
    <>
      <div className="hotaccessoriesmenu">
        <Link className="hotaccessorieslink" to="/music">
          Music Store
        </Link>
        <Link className="hotaccessorieslink" to="/smartdevices">
          Smart Devices
        </Link>
        <Link className="hotaccessorieslink" to="/home">
          Home
        </Link>
        <Link className="hotaccessorieslink" to="/lifestyle">
          Life Style
        </Link>
        <Link className="hotaccessorieslink" to="/mobileaccessories">
          Mobile Accessories
        </Link>
      </div>
    </>
  );
};

export { HotAccessoriesMenu };
