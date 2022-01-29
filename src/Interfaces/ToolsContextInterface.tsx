import ToastInterface from "./ToastInterface";

export default interface ToolsContextInterface {
  toast: ToastState;
  pageTitle: PageTitleState;
}

interface ToastState {
  state: ToastInterface;
  setState: (value: ToastInterface) => void;
}

interface PageTitleState {
  state: string;
  setState: (value: string) => void;
}
