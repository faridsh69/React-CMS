import { Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import Blogs from "./../Pages/Blogs";
import Foods from "../Pages/Foods";
import HowToUse from "../Pages/HowToUse";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Toast from "./Toast";
import { ToolsProvider } from "./Contexts/ToolsContext";
import Sidebar from "./Sidebar";
import InternetConnection from "./InternetConnection";

export default function Master() {
  return (
    <ToolsProvider>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="food" element={<Foods />} />
          <Route path="page/how-to-use" element={<HowToUse />} />
          <Route path="page/about-us" element={<AboutUs />} />
          <Route path="page/contact-us" element={<ContactUs />} />
        </Routes>
        <Toast />
        <InternetConnection />
      </Sidebar>
    </ToolsProvider>
  );
}
