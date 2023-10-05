import "./App.css";
import Menu from "./Pages/Menu";
import UsetProfilePage from "./Pages/UsetProfilePage";
import HomePage from "./Pages/homePage";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";





function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element= {<HomePage/>}/>
      <Route path="/menu" element ={<Menu/>}/>
      <Route path="/userProfile" element={<UsetProfilePage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
