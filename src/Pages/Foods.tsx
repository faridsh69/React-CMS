import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Get from "./../Services/Get";
import React from "react";
import Food from "../Interfaces/Food";
import ToolsContext from "../Contexts/ToolsContext";
import GetResponseInterface from "../Interfaces/AxiosResponseInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Meta from "../Layouts/Meta";
import axios from "axios";
import Medias from "../Layouts/Medias";
import Breadcrumb from "../Layouts/Breadcrumb";

export default function Foods(): JSX.Element {
  const [items, setItems] = React.useState<Food[]>([]);
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

  return (
    <>
      <Meta title="Foods" />

      <Medias loading={loading} items={items} />
    </>
  );
}
