import { AlertColor } from "@mui/material";

export default interface GetResponseInterface {
  data: Array<any>;
  message: string;
  status: AlertColor;
}
