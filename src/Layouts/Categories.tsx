import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";

import axios from "axios";
import Get from "./../Services/Get";
import GetResponseInterface from "../Interfaces/AxiosResponseInterface";
import CategoryInterface from "../Interfaces/CategoryInterface";
import HowToUse from "../Pages/HowToUse";
import { Avatar } from "@mui/material";

export default function Categories(): JSX.Element {
  const [items, setItems] = React.useState<CategoryInterface[]>([]);
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedItem(newValue);
  };

  React.useEffect(() => {
    Get("food/category").then((response: GetResponseInterface) => {
      setItems(response.data);
    });

    return () => axios.CancelToken.source().cancel();
  }, []);

  if (!items.length) {
    return <></>;
  }

  return (
    <>
      <Box sx={{ maxWidth: 380, bgcolor: "background.paper" }}>
        <Tabs
          value={selectedItem}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {items.map((item: CategoryInterface) => {
            return (
              <Tab
                key={item.id}
                label={item.title}
                icon={<Avatar alt={item.title} src={item.image} />}
              />
            );
          })}
        </Tabs>
      </Box>
    </>
  );
}
