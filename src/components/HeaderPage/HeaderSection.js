import React from "react";
import "../../css/HeaderSection.css";
;

function HeaderSection({ label, icon }) {
  return (
    <div className="header-section">
      {/* <FontAwesomeIcon icon={icon} /> */}
      {label.replace(label[0], label[0].toUpperCase())}
    </div>
  );  
}

export default HeaderSection;
