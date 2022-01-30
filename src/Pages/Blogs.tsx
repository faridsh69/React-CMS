import Get from "./../Services/Get";
import React from "react";
import Blog from "../Interfaces/Blog";
import ToolsContext from "../Contexts/ToolsContext";
import GetResponseInterface from "../Interfaces/AxiosResponseInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Meta from "../Layouts/Meta";
import axios from "axios";
import Medias from "../Layouts/Medias";
import Breadcrumb from "../Layouts/Breadcrumb";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);

  React.useEffect(() => {
    Tools.pageTitle.setState("React-CMS | Blogs");
    setLoading(true);
    Get("blog").then((response: GetResponseInterface) => {
      setLoading(false);
      setBlogs(response.data);
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
      <Meta title="Blogs" />
      <Breadcrumb />
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardActions>
          <Button size="small">Sort By: Filter: </Button>
        </CardActions>
      </Card>

      <Medias loading={loading} items={blogs} />

      {/* <li> eyne instagram mikonim, </li>
      <li> on balash ham category ha be sorate reyli hastan</li>
      <li> /blogs </li>
      <li> /categories/blog </li>
      <li> /tags/blog</li>
      <li> in blogs ha ye sorting dare</li>
      <li> ye done search ham bezarim barash</li>
      <li> vase pagination 2 ta kar bayad kard </li>
      <li>aval in ke pagination ro user entekhab mikone</li>
      <li>on pain ye tabi darim be esme auto-pagination </li>
      <li>toe on tabe liste blog ha ro neshon midim,</li>
      <li>scroll mikone pain bishtar blog miad </li>
      <li> image hae blog ha hamegi lazy loading daran </li>
      <li>
        vaghti ke ziad load mikone pain o image ziad load mishe recycler mikhaim{" "}
      </li>
      <li>on pain ke tabe dge ham darim be esme table </li>
      <li> toe table datae blog ha ro neshon midim</li> */}
    </>
  );
}
