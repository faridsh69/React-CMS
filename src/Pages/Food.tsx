import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ToolsContext from "../Contexts/ToolsContext";
import AxiosResponseInterface from "../Interfaces/AxiosResponseInterface";
import FoodInterface from "../Interfaces/FoodInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Get from "../Services/Get";
import Loading from "../Layouts/Loading";

export default function Food() {
  const [item, setItem] = React.useState<FoodInterface>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);
  const params = useParams();
  const url = params.url;

  React.useEffect(() => {
    Tools.pageTitle.setState("React-CMS | Foods | " + url);
    setLoading(true);
    Get("food/" + url).then((response: AxiosResponseInterface) => {
      setItem(response.data);
      setLoading(false);
      Tools.toast.setState({
        open: true,
        message: response.message,
        status: response.status,
      });
    });

    return () => axios.CancelToken.source().cancel();
  }, []);

  if (loading) {
    return <Loading type="circle" />;
  }

  return <div>{1 + 1}</div>;
}
