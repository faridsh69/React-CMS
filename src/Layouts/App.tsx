import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToolsProvider } from "./../Contexts/ToolsContext";
import Sidebar from "./Sidebar";
import Toast from "./Toast";
import InternetConnection from "./InternetConnection";

import Home from "./../Pages/Home";
import Blogs from "./../Pages/Blogs";
import Foods from "../Pages/Foods";
import HowToUse from "../Pages/HowToUse";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
