import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";

import LoadingPropsInterface from "../Interfaces/LoadingPropsInterface";

export default function Loading(props: LoadingPropsInterface) {
  const { type } = props;

  switch (type) {
    case "circular":
      return <CircularProgress color="inherit" />;

    case "media":
      return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            }
            action={null}
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <CardContent>
            <>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </>
            )
          </CardContent>
        </Card>
      );

    default:
      return <>Loading...</>;
  }
}
