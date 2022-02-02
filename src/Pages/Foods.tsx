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

  return (
    <>
      <Meta title="Foods" />
      <Breadcrumb
        title="Foods"
        icon={<RestaurantOutlinedIcon sx={{ mr: 0.5 }} fontSize="small" />}
      />
      <Categories />
      <Medias loading={loading} items={items} />
    </>
  );
}
