import { useEffect, useState } from "react"
import {  toast } from 'react-toastify';
import { Typography, TextField, Box, Button,InputAdornment,MenuItem,Select} from "@mui/material";

import axios from "axios";

import useStyles from "../RegisterPage/style.js"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
  
  // for hide and unhide password icon
  const [show , setShow] = useState(false)
  
  
    // for style.css
    const classes = useStyles();
  
    // for register button
    const navigate = useNavigate();
   
  
    // for post form
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(userName ===""){
        toast.error("Name is Required")
      }else if( Email === ""){
        toast.error("email is requred")
      }else if(Password === ""){
        toast.error("password is required")
      }else if(ConfirmPassword === ""){
        toast.error("confirm pasword is requred")
      }else if (Password ===!ConfirmPassword){
        toast.error("password not match with confrim password")
      }
      const data = { userName: userName,Email:Email,Phone: Phone, Password: Password, ConfirmPassword: ConfirmPassword, }
        axios.post('http://localhost:4000/api/Register',data,{
          
        })
        .then((res)=>{
            navigate("/login")
          
        })
        .catch((err)=>{
          console.log(err,400)
        })
      
      
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
            id="UserName"
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            margin="normal"
            className={classes.Field1}
            style={{ width: 330 , marginTop: 10}}
          />

          {/*  Email*/}
          <TextField
            id="Email"
            label="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.Field2}
            style={{ width: 330 ,marginTop: 5}}

          />

               {/*  Phone*/}
               <TextField
            id="Phone"
            label="Phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className={classes.Field2}
            style={{ width: 330 ,marginTop: 5}}

          />
                  {/*  Password*/}
                  <TextField
            id="Password"
            label="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.Field2}
            style={{ width: 330 ,marginTop: 5}}

          />
                      {/*  ConfirmPassword*/}
                      <TextField
            id="Confrim Password"
            label="Confirm Password"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={classes.Field2}
            style={{ width: 330 ,marginTop: 5}}

          />


          {/* sign in  button */}
          <Typography className={classes.forgetpasslink}  style={{ fontSize: 15, marginTop: 5,marginLeft: 205}}>Forget passowrd?</Typography>
          <Button
            className={classes.regbutton}
            name="registred"
            style={{ backgroundColor: "#003FB9", marginTop: 15,textTransform: 'none',color: '#FFFFFF'}}
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Signup