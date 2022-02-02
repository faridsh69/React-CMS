import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";

import MediaPropsInterface from "../Interfaces/MediaPropsInterface";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function Media(props: MediaPropsInterface) {
  const { title, url, image, description, created_at } = props.item;
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={<Avatar alt={title} src={image} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={
          <>
            <Moment date={created_at} format="DD" durationFromNow />
            <span> Days ago </span>
          </>
        }
      />
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={"blog/" + url}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
