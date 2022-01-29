import { AlertColor } from "@mui/material";

export default interface ToastInterface {
  status: AlertColor;
  message: string;
  open: boolean;
}
