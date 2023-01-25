import { Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./Style";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:4000/output";

const HomePage = () => {
  const [state, setState] = useState(false);

 

  const navigate = useNavigate();

  // login button route

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const classes = useStyles();

  return (
    <>
      <Grid container style={{ marginTop: 300 }}>
        <Grid item md={12}>
          <Typography
            variant="h3"
            style={{ color: "red", textAlign: "center" }}
          >
            {" "}
            This is Home Page
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
