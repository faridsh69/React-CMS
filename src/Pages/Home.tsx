import ToolsContext from "../Contexts/ToolsContext";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import React from "react";

export default function Home() {
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);

  React.useEffect(() => {
    Tools.pageTitle.setState("React-CMS | Home");
  }, []);

  return (
    <div>
      <div>
        toe home minevisim modules ke bade ha miaram tosh injori mishe ke inja
      </div>
      <div>
        module hai ke to server hast pass dade mishe har module i ye done
      </div>
      <div>che componentei baya call beshe</div>
    </div>
  );
}
