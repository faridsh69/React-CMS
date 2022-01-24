import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Formik } from "formik";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Box sx={{ borderColor: "error.main" }}>
            <input />
            <Button variant="contained" color="secondary">
              Hello World
            </Button>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Link
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
          Create React App example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
