import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  welcome: {
    marginTop: "10px",
    padding: "5px",
    textAlign: "center",
    justifyContent: "center",
    color: "#0B3558",
    font: "Open Sans",
    fontWeight: "bold",
    fontSize: "30px",
    latterSpacing: "0px",
    opacity: "1px",
  },
  textField: {
    display: "flex",
    position: "relative",
    top: "15px",
    flexDirection: "column",
    maxWidth: "500px",
    height: "800px",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    boxShadow: "5px 8px 20px #ccc",
    backgroundColor: "#FFFFFF",
    borderRadius: "10%",
  },
  textinfo: {
    
    color: "#0B3558",
    height: "40px",
    width: "190px",
    textAlign: 'justify-content',
    fontFamily: "Open Sans, Regular",
    textIndent: "20px",
   
  },
  forgetpasslink: {
    fontFamily: 'Open Sans',
    color: '#003FB9',
     
  },
  regbutton: {
    width: '330px',
    fontFamily: 'Open Sans',
    

  },
  img :{
    backgroundColor: 'grey',
    width: '80px',
    height: '80px',
  

  }

}));
