import ToolsContext from "../Contexts/ToolsContext";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import React from "react";

export default function Foods() {
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);

  React.useEffect(() => {
    Tools.pageTitle.setState("React-CMS | Food");
  }, []);

  return (
    <ul>
      <li>ye liste food miarim</li>
      <li>eyne menew bashe ba category hae ghaza ha</li>
      <li>felan ro har ghaza mizanim chizi nemishe vali bade ha</li>
      <li>
        ro har ghaza ke mizanim url avaz mishe o eyne menew ghaza baz mishe
      </li>
      <li>har chi ke to ghesmate details hast o inja neshon midim</li>
    </ul>
  );
}
