import React from "react";
import { useCollapse } from "react-collapsed";
import Button from "../header/Button";

function Collapsible() {
  const { getCollapseProps, getToogleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="Menu" {...getCollapseProps()}>
        {isExpanded ? "hello" : "bonsoir"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <Button title="About" />
          <Button title="Services" />
          <Button title="Projects" />
          <Button title="Contact" />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return <Collapsible />;
}
export default Menu;
