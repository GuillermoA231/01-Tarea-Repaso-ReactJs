import React from "react";

function MenuItem({id,linkName,colorText, disabled}) {
  const isActive = disabled ? '' : 'disabled';
  return (
    <a className={`nav-link active text-${colorText} ${isActive}`} aria-current="page" href="#">
      {linkName}
    </a>
  );
}

export default MenuItem;
