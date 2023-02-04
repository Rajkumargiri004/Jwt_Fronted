import React from 'react'
import { Typography, TextField, Box, Button} from "@mui/material";
import {useState} from 'react'
import useStyles from "../Passwordreset/Style.js";

import {  toast } from 'react-toastify';

const PasswordResepage = () => {

const [email, setEmail] = useState("");

const [message, setMessage] = useState("")

const setVal = (e)=>{
  setEmail(e.target.value)

}

const sendLink = async(e)=>{
  e.preventDefault()
  const res = await fetch("http://localhost:4000/api/sendpasswordLink",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({email})
  });

  const data = await res.json();

  if(data.status == 201){
    setEmail("");
    setMessage(true)
  }else{
    toast.error("Invalid User")
  }

}
const classes = useStyles();

  return (
    <>
        <form >
        <Box className={classes.textField}>
          <Box className={classes.logimg}><img src="./log.png" alt="logo" style={{width:  80, }}/></Box>
          <Typography variant="h4" className={classes.welcome}>
            Reset Your password
          </Typography>
          {message ? <Typography style={{color: "green"}}>password reset link send seccessfully in your email</Typography> : ""}
     

          {/* Eamil address */}
          <TextField
            id="Email"
            label="Enter your Email"
            name="email"
            margin="normal"
            className={classes.Field1}
            style={{ width: 330 , marginTop: 10}}
            value={email}
            onChange={setVal}
          />

          {/*  Button*/}
          <Button
            className={classes.Field2}
            onClick={sendLink}
            style={{ width: 330 ,marginTop: 5}}>Send</Button>
      
        </Box>
      </form>
    </>
  )
}

export default PasswordResepage