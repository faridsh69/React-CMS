import { AlertColor } from "@mui/material";

export default interface GetResponseInterface {
  status: AlertColor;
  message: string;
  data: Array<any>;
}
