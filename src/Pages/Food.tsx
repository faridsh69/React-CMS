import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import DoneIcon from "@mui/icons-material/Done";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";

import ToolsContext from "../Contexts/ToolsContext";
import AxiosResponseInterface from "../Interfaces/AxiosResponseInterface";
import FoodInterface from "../Interfaces/FoodInterface";
import ToolsContextInterface from "../Interfaces/ToolsContextInterface";
import Get from "../Services/Get";
import Loading from "../Layouts/Loading";
import Error404 from "./Errors/Error404";
import TagInterface from "../Interfaces/TagInterface";
import Medias from "../Layouts/Medias";
import Rate from "../Layouts/Rate";
import { Button } from "@mui/material";

export default function Food() {
  const [item, setItem] = React.useState<FoodInterface>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const Tools = React.useContext<ToolsContextInterface>(ToolsContext);
  const params = useParams();
  const url = params.url;

  React.useEffect(() => {
    setLoading(true);
    Get("food/" + url).then((response: AxiosResponseInterface) => {
      setItem(response.data);
      Tools.pageTitle.setState("React-CMS | Foods | " + response.data.title);
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

  if (item) {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Chip label={"#" + item.id} sx={{ mt: 1 }} />
          <Divider orientation="vertical" flexItem sx={{ m: 1 }} />
          <Typography variant="h3" component="h1">
            {item.title}
          </Typography>
          <FavoriteIcon color="secondary" />

          <Switch defaultChecked={item.activated} />
          <Chip
            label={item.language}
            onDelete={() => {}}
            deleteIcon={<DoneIcon />}
          />
          {item.category ? (
            <Chip
              label={item.category.title}
              onDelete={() => {}}
              deleteIcon={<DoneIcon />}
            />
          ) : (
            ""
          )}
          <a
            href={"whatsapp://send?text=" + item.url}
            data-action="share/whatsapp/share"
          >
            <ShareIcon />
            Share via Whatsapp
          </a>
        </Box>
        <Chip
          label={"Created At: " + item.created_at}
          sx={{ mt: 1 }}
          variant="outlined"
        />
        <br />
        <Chip
          label={"Updated At: " + item.updated_at}
          sx={{ mt: 1, mb: 2 }}
          variant="outlined"
        />
        <Rate />
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontWeight: "bold", fontSize: "30px", mt: 3 }}
        >
          ${item.price} - ${item.discount_price}
        </Typography>
        {item.tags
          ? item.tags.map((tag: TagInterface, index: number) => {
              return (
                <Chip
                  sx={{ mr: 1, mb: 1 }}
                  key={index}
                  label={tag.title}
                  icon={undefined}
                  color="success"
                  variant="outlined"
                />
              );
            })
          : ""}
        <Divider />
        <Box>
          <img src={item.image} width={300} />
          <video src={item.video} width={300} controls />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            py: 3,
          }}
        >
          <Paper sx={{ padding: 3, mb: 2 }} elevation={1}>
            {item.description}
          </Paper>
          <Paper sx={{ padding: 3, mb: 2 }} elevation={2}>
            {item.content}
          </Paper>
          <Paper sx={{ padding: 3 }} elevation={3}>
            {item.properties}
          </Paper>
        </Box>
        <Typography component="h5" variant="h4">
          Related Items
        </Typography>
        <Divider />
        <Medias loading={false} items={item.relateds} />
        <Divider />
        Comments:
        <br />
        <TextField
          placeholder="Write your comment here ..."
          multiline
          rows={2}
        />
        <br />
        <Button variant="contained">Submit</Button>
      </div>
    );
  }

  return <Error404 />;
}
