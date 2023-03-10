import { Typography, TextField, Box, Button,InputAdornment,MenuItem,Select} from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "axios";
import useStyles from "./Style.js";
import { useNavigate } from "react-router-dom";




//  for form input target
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")



// for hide and unhide password icon
const [show , setShow] = useState(false)


  // for style.css
  const classes = useStyles();

  // for register button
  const navigate = useNavigate();
 

  // for post form

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = { username: username, password: password, }
      axios.post('http://localhost:4000/api/login',data,)
      .then((res)=>{
        if(res.data){
          localStorage.setItem("token",res.data.token)
          navigate("/HomePage")
        }
      })
      .catch((err)=>{
        console.log(err,400)
      })
    
    
  };

  // for register button navigate
  const passwordresetpage = () => {
    navigate("/passwordReset");
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <Box className={classes.textField}>
          <Box className={classes.logimg}><img src="./log.png" alt="logo" style={{width:  80, }}/></Box>
          <Typography variant="h4" className={classes.welcome}>
            Welcome!
          </Typography>
          <Typography className={classes.textinfo} style={{ fontSize: 10}}> Let's connect to your workspace,
          please enter your credentials to continue.</Typography>

          {/* Eamil address */}
          <TextField
            id="username"
            label="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            className={classes.Field1}
            style={{ width: 330 , marginTop: 10}}
          />

          {/*  password*/}
          <TextField
            id="password"
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.Field2}
            style={{ width: 330 ,marginTop: 5}}
            InputProps={{
              endAdornment: <Button >
              <InputAdornment  position="end" ><img src="./hidepass.png" /></InputAdornment></Button>,
            }}
          />
          {/* sign in  button */}
          <Typography className={classes.forgetpasslink}  style={{ fontSize: 15, marginTop: 5,marginLeft: 205}}><Button onClick={passwordresetpage}>Forget passowrd?</Button></Typography>
          <Button
            className={classes.regbutton}
            name="registred"
            style={{ backgroundColor: "#003FB9", marginTop: 15,textTransform: 'none',color: '#FFFFFF'}}
          >
            Sign In
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
