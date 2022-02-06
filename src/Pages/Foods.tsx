import Get from "./../Services/Get";
import React from "react";
import FoodInterface from "../Interfaces/FoodInterface";
import ToolsContext from "../Contexts/ToolsContext";
import AxiosResponseInterface from "../Interfaces/AxiosResponseInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Meta from "../Layouts/Meta";
import axios from "axios";
import Medias from "../Layouts/Medias";
import Categories from "../Layouts/Categories";
import Breadcrumb from "../Layouts/Breadcrumb";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Foods(): JSX.Element {
  const [items, setItems] = React.useState<FoodInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);

  React.useEffect(() => {
    Tools.pageTitle.setState("React-CMS | Foods");
    setLoading(true);
    Get("food").then((response: AxiosResponseInterface) => {
      setLoading(false);
      setItems(response.data);
      Tools.toast.setState({
        open: true,
        message: response.message,
        status: response.status,
      });
    });

    return () => axios.CancelToken.source().cancel();
  }, []);

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  return (
    <>
      <Meta title="Foods" />
      <div className="swiper" style={{ width: "300px", height: "150px" }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-scrollbar"></div>
      </div>

      <Breadcrumb
        title="Foods"
        icon={<RestaurantOutlinedIcon sx={{ mr: 0.5 }} fontSize="small" />}
      />
      <Categories />
      <Medias loading={loading} items={items} />
    </>
  );
}
