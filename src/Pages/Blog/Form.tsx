import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import AdapterDateFns from "@material-ui/lab/AdapterMoment";

export default function BlogForm() {
  const SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY ?? "SITE_KEY";
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<Date | null>(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel htmlFor="text">Text</InputLabel>
        <OutlinedInput id="text" label="Text" />
        <FormHelperText id="helper-text">Helper Text</FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput id="email" label="Email" type="email" />
        <FormHelperText id="helper-email">Helper Email</FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="number">Number</InputLabel>
        <OutlinedInput
          id="number"
          label="Number"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <FormHelperText id="helper-number">Helper Number</FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="input-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
      <br />
      <br />

      <ReCAPTCHA sitekey={SITE_KEY} />
      <input type="time" defaultValue="11:30" />
      <br />
      <input type="color" defaultValue="#e66465" />
      <br />
      <textarea defaultValue="textarea" />
      <br />
      <input type="checkbox" />
      <br />
      <input type="radio" />
      <br />
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <select multiple>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <input type="file" />
    </form>
  );
}
