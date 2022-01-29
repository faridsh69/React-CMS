import React from "react";
import ToolsContext from "./../Contexts/ToolsContext";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";

export default function InternetConnection(): JSX.Element {
  const checkConnectionDelay: number = 1000;

  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);

  React.useEffect(() => {
    setInterval(() => {
      if (!navigator.onLine) {
        Tools.toast.setState({
          status: "warning",
          message: "Please Check your internet connection.",
          open: true,
        });
      }
    }, checkConnectionDelay);
  }, []);

  return <></>;
}
