import Login from './component/LoginPage/Login'
import Signup from './component/RegisterPage/Signup.js'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import HomePage from './component/WelcomPage/Welcome';
import Landing from './component/LandingPage/Landing.js'
import Header from './component/Header/Header.js'
import Footer from './component/footer/Footer'
import PasswordResepage from './component/Passwordreset/PasswordResepage.js'
import Forgotpassword from './component/Forgotpassword/Forgotpassword';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/landingPage " element={<Landing/>}/>
      <Route path="/passwordReset" element={<PasswordResepage/>}/>
      <Route path="/Forgotpassword/:id/:token" element={<Forgotpassword/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
