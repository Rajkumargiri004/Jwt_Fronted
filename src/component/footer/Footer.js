import { Box, Typography, Grid, TextField,Toolbar, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <>
    <AppBar>


      <Toolbar elevation={0}
        sx={{
          position: "fixed",
          display: "flex",
          bottom: "0px",
          height: " 50px",
          width: "100%",
          margin: "0px",
          backgroundColor: "#1976d2",
          justifyContent: "center",
          opacity: 1
        }}
      >
        <Typography
          sx={{
            flexDirection: "column",
            textAlign: "center",
            padding: "10px",
            color: "white",
            textAlign: "center",
            width: "10%",
            height: "10px",
            backgroundColor: "1976d2",
            
          }}
        >
          Copyright &copy; 2023
        </Typography>
      </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Footer;
