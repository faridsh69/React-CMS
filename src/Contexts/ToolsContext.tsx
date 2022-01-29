import React from "react";
import ToastInterface from "../Interfaces/ToastInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";

const defaultValue: ToolsContextInterface = {
  toast: {
    state: {
      status: "success",
      message: "Successfully Done!",
      open: false,
    },
    setState: () => {},
  },
  pageTitle: {
    state: "Title",
    setState: () => {},
  },
};

export function ToolsProvider(props: any): JSX.Element {
  const [pageTitle, setPageTitle] = React.useState<string>(
    defaultValue.pageTitle.state
  );

  const [toastState, setToastState] = React.useState<ToastInterface>(
    defaultValue.toast.state
  );

  const value: ToolsContextInterface = {
    toast: {
      state: toastState,
      setState: setToastState,
    },
    pageTitle: {
      state: pageTitle,
      setState: setPageTitle,
    },
  };

  return <ToolsContext.Provider value={value} {...props} />;
}

const ToolsContext = React.createContext<ToolsContextInterface>(defaultValue);
export default ToolsContext;
