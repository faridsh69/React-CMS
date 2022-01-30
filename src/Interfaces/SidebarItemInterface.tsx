export default interface SidebarItemInterface {
  name: string;
  path: string;
  icon: JSX.Element;
  component: () => JSX.Element;
}
