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
import Blog from "../Interfaces/Blog";
import ToolsContext from "../Contexts/ToolsContext";
import GetResponseInterface from "../Interfaces/AxiosResponseInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Meta from "../Layouts/Meta";
import axios from "axios";
import Medias from "../Layouts/Medias";
import Breadcrumb from "../Layouts/Breadcrumb";

export default function Blogs(): JSX.Element {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [items, setItems] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);
  const [orderBy, setOrderBy] = React.useState<string>("");

  const orderByOptions = [
    { title: "Id, Asc ", value: "id-asc" },
    { title: "Id, Desc ", value: "id-dsc" },
    { title: "Title, Asc", value: "title-asc" },
    { title: "Title, Desc", value: "title-dsc" },
  ];

  const handleSort = (event: SelectChangeEvent) => {
    const ordering: string = event.target.value;
    setOrderBy(ordering);
    setItems(sort(items, ordering));
  };

  const sort = (items: Blog[], ordering: string): Blog[] => {
    const [property, direction] = ordering.split("-");
    const directionNumber: number = direction === "asc" ? 1 : -1;
    const emptyItems: Blog[] = [];
    return emptyItems
      .concat(items)
      .sort((a: any, b: any) =>
        a[property] > b[property] ? directionNumber : -1 * directionNumber
      );
  };

  const handleFilter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const searchText = (e.target as HTMLInputElement).value;
    let filteredItems = blogs.filter((blog: Blog) =>
      blog.title.includes(searchText)
    );
    setItems(sort(filteredItems, orderBy));
  };

  React.useEffect(() => {
    // Tools.pageTitle.setState("React-CMS | Blogs");
    setLoading(true);
    Get("blog").then((response: GetResponseInterface) => {
      setLoading(false);
      setItems(response.data);
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
          <Box sx={{ minWidth: 130 }}>
            <FormControl fullWidth>
              <InputLabel id="order-by">Order By</InputLabel>
              <Select
                labelId="order-by"
                value={orderBy}
                label="Order By"
                onChange={handleSort}
              >
                {orderByOptions.map((orderByOption) => {
                  return (
                    <MenuItem
                      value={orderByOption.value}
                      key={orderByOption.title}
                    >
                      {orderByOption.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 400 }}>
            <TextField
              label="Search"
              variant="standard"
              onKeyUp={handleFilter}
            />
          </Box>
        </CardActions>
      </Card>

      <Medias loading={loading} items={items} />

      {/* <li> eyne instagram mikonim, </li>
      <li> on balash ham category ha be sorate reyli hastan</li>
      <li> /blogs </li>
      <li> /categories/blog </li>
      <li> /tags/blog</li>
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
