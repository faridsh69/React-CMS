import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import BreadcrumbPropsInterface from "../Interfaces/BreadcrumbPropsInterface";
import { Link as RouterLink } from "react-router-dom";

export default function Breadcrumb(props: BreadcrumbPropsInterface) {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {props.icon}
          {props.title}
        </Typography>
      </Breadcrumbs>
    </>
  );
}
