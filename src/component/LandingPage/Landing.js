import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'

const Landing = () => {
  return (
    <>
       <AppBar>
        <Toolbar
          sx={{
            position: "fixed",
            display: "flex",
            top: "100px",
            height: " 50px",
            width: "100%",
            margin: "0px",
            backgroundColor: "#1976d2",
            justifyContent: "center",
            opacity: 1,
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
            This is landingPage
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Landing