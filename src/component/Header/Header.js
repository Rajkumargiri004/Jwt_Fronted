import { AppBar, Toolbar, Button, Avatar, Box,} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = localStorage.getItem("token");
  // direct  style
  const logoutstyle = {
    backgroundColor: "none",
    textTransform: "none",
    color: "white",
    fontFamily: "sans-sarif,Arial",
    fontWeight: "bold",
    marginTop: "12px",
    marginLeft: "auto",
  };
  const loginStyle = {
    backgroundColor: "none",
    textTransform: "none",
    color: "white",
    fontFamily: "sans-sarif,Arial",
    fontWeight: "bold",
    marginTop: "12px",
    marginLeft: "auto",
  };

  const registrstyle = {
    backgroundColor: "none",
    textTransform: "none",
    color: "white",
    fontFamily: "sans-sarif,Arial",
    fontWeight: "bold",
    marginTop: "12px",
  };


  const avtdiv = {
    backgroundColor: "red",
    marginLeft: "auto",
  };

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/signup");
  };
  const logout = () => {
    localStorage.clear("token");
    navigate("/landingPage");
  };

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <h2>Ecommerce</h2>
          </Box>
          {auth ? (
            <>
              <Avatar sx={{ backgroundColor: "black", marginTop: "15px" }}>
                <img
                  src="./pic3.png"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "15px",
                    objectFit: "cover",
                  }}
                />
              </Avatar>

              <Button onClick={logout} sx={logoutstyle}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={login} style={loginStyle}>
                Login
              </Button>

              <Button onClick={register} style={registrstyle}>
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
