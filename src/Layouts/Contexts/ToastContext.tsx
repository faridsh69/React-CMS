import React from "react";

const ToastContext = React.createContext<any[]>([]);

export function ToastProvider(props: any) {
  const [toastState, setToastState] = React.useState({
    open: false,
    severity: "success",
    message: "Successfully Done!",
  });
  const value = [toastState, setToastState];
  return <ToastContext.Provider value={value} {...props} />;
}

export default ToastContext;
