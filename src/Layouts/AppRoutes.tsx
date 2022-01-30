import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./../Styles/transition.css";

import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Foods from "../Pages/Foods";
import HowToUse from "../Pages/HowToUse";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

export default function AppRoutes() {
  const location = useLocation();
  const nodeRef = React.useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition
        nodeRef={nodeRef}
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <div ref={nodeRef}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="food" element={<Foods />} />
            <Route path="page/how-to-use" element={<HowToUse />} />
            <Route path="page/about-us" element={<AboutUs />} />
            <Route path="page/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
