import { AlertColor } from "@mui/material";

export default interface AxiosResponseInterface {
  status: AlertColor;
  message: string;
  data: Array<any>;
}
