import Get from "./../Services/Get";
import React from "react";
import FoodInterface from "../Interfaces/FoodInterface";
import ToolsContext from "../Contexts/ToolsContext";
import GetResponseInterface from "../Interfaces/AxiosResponseInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Meta from "../Layouts/Meta";
import axios from "axios";
import Medias from "../Layouts/Medias";
import Categories from "../Layouts/Categories";

export default function Foods(): JSX.Element {
  const [items, setItems] = React.useState<FoodInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);

  React.useEffect(() => {
    Tools.pageTitle.setState("React-CMS | Foods");
    setLoading(true);
    Get("food").then((response: GetResponseInterface) => {
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

  const src2 =
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg";
  const src1 =
    "https://images.immediate.co.uk/production/volatile/sites/30/2017/06/healthy-nicoise-09b6cd9.jpg";
  const src4 =
    "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg";
  const src3 =
    "https://onlinelibrary.wiley.com/pb-assets/20487177/Bioactive%20compounds-1615400802.jpg";
  return (
    <>
      <Meta title="Foods" />
      <Categories />
      <Medias loading={loading} items={items} />
    </>
  );
}
