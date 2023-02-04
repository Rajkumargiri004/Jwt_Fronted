import React from 'react'
import { Typography, TextField, Box, Button} from "@mui/material";
import {useNavigate,useParams} from 'react-router-dom'
import  {useEffect,useState}  from 'react';
import {  toast } from 'react-toastify';
import useStyles from "../Forgotpassword/Style.js"




const Forgotpassword = () => {

  const {id, token} = useParams();
  const history = useNavigate()

  const [password,setPassword] = useState("");

  const [message ,setMessage] = useState("")

 



  const userValid = async()=>{
    const res = await fetch(`http://localhost:4000/api/forgotpassword/${id}/${token}`,{
      method: "GET",
      headers:{
        "Content-Type" : "application/json"
      }
    });

    const data = await res.json()

    if(data.status == 201){
      console.log("user valid")
    }else{
       history("/landingPage")
    }
  }

  const setvalue = (e)=>{
    setPassword(e.target.value)

  }

  const sendpassword = async(e)=>{
    e.preventDefault() 
    const res = await fetch(`http://localhost:4000/api/${id}/${token}`,{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({password})
    });
    const data = await res.json()

    if(data.status == 201){
     setPassword("")
     setMessage(true)
    }else{
      toast.error(" Token Expired genrete New Link")
    }
  }
  useEffect(()=>{
    userValid()
  },[])



  const classes = useStyles();
  return (
    <>
    <form >
        <Box className={classes.textField}>
          <Box className={classes.logimg}><img src="./log.png" alt="logo" style={{width:  80, }}/></Box>
          <Typography variant="h4" className={classes.welcome}>
            Update Your Password
          </Typography>

          {/* Eamil address */}
          <TextField
            id="password"
            label="Enter your New Password"
            name="password"
            margin="normal"
            value={password}
            onChange={setvalue}
            className={classes.Field1}
            style={{ width: 330 , marginTop: 10}}
      
          />

          {/*  Button*/}
          <Button
            className={classes.Field2}
            onClick={sendpassword}
            style={{ width: 330 ,marginTop: 5}}>Send</Button>
      
        </Box>
      </form>
    </>
  )
}

export default Forgotpassword