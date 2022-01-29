import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CustomeAlertInterface from "../Interfaces/CustomeAlertInterface";

export default function CustomeAlert(
  props: CustomeAlertInterface
): JSX.Element {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity={props.status}>
        {props.message}
      </Alert>
    </Stack>
  );
}
