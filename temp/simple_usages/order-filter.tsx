import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

interface Blog {
  id: number;
  title: string;
}

export default function Blog() {
  const [items, setItems] = React.useState<Blog[]>([]);
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
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

  return (
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
          <TextField label="Search" variant="standard" onKeyUp={handleFilter} />
        </Box>
      </CardActions>
    </Card>
  );
}
