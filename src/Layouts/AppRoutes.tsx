import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./../Styles/transition.css";

import Sidebar from "./Sidebar";
import Toast from "./Toast";
import InternetConnection from "./InternetConnection";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Foods from "../Pages/Foods";
import Food from "../Pages/Food";
import HowToUse from "../Pages/HowToUse";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import SidebarItemInterface from "../Interfaces/SidebarItemInterface";
import Error404 from "../Pages/Errors/Error404";

export default function AppRoutes() {
  const location = useLocation();
  const nodeRef = React.useRef<null>(null);

  const sidebarItems: SidebarItemInterface[] = [
    { name: "Home", icon: <HomeOutlinedIcon />, path: "/", component: Home },
    {
      name: "Food",
      icon: <RestaurantOutlinedIcon />,
      path: "/food",
      component: Foods,
    },
    {
      name: "Blog",
      icon: <DescriptionOutlinedIcon />,
      path: "/blog",
      component: Blogs,
    },
    {
      name: "How To Use",
      icon: <MouseOutlinedIcon />,
      path: "/page/how-to-use",
      component: HowToUse,
    },
    {
      name: "About Us",
      icon: <InfoOutlinedIcon />,
      path: "/page/about-us",
      component: AboutUs,
    },
    {
      name: "Contact Us",
      icon: <PhoneEnabledOutlinedIcon />,
      path: "/page/contact-us",
      component: ContactUs,
    },
  ];

  return (
    <Sidebar sidebarItems={sidebarItems}>
      <TransitionGroup component={null}>
        <CSSTransition
          nodeRef={nodeRef}
          key={location.key}
          timeout={300}
          classNames="next"
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              {sidebarItems.map((sidebarItem: SidebarItemInterface) => {
                return (
                  <Route
                    path={sidebarItem.path}
                    key={sidebarItem.name}
                    element={<sidebarItem.component />}
                  />
                );
              })}
              <Route path="/food/:url" element={<Food />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Toast />
      <InternetConnection />
    </Sidebar>
  );
}
