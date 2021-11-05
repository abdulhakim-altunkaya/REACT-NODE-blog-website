import logo from './sun.png';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test4 from "./components/Test4";
import Test1 from "./components/Test1";
import Articles from "./components/Articles";
import Test3 from "./components/Test3";
import Test6 from "./components/Test6";
import ArticleRoutes from "./components/ArticleRoutes";
import Create from "./components/Create";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Upload from "./components/Upload";
import Socket from "./components/Socket";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Route, Switch, BrowserRouter as Router} from  "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="mainComponentArea">
        <div className="areaUp">
          <div className="areaUpChild1">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="navBarLinks" id="pageName"> ARTICLE MOOSE </span>
          </div>
          <div className="areaUpChild2"><Navbar/></div>
          <div className="areaUpChild3"><Link to="/about" className="navBarLinks navBarLinks2" id= "aboutButton">About</Link></div>
        </div>
        <div className="colorBar">
          <span id="color1"></span>
          <span id="color2"></span>
          <span id="color3"></span>
          <span id="color4"></span>
        </div>
        <div className="areaLow">
         <div className="areaContent">
           <Switch>
             <Route exact path="/test4"><Test4 /></Route>
             <Route exact path="/test1"><Test1 /></Route>
             <Route exact path="/articles"><Articles /></Route>
             <Route exact path="/test3"><Test3 /></Route>
             <Route exact path="/about"><About /></Route>
             <Route exact path="/create"><Create /></Route>
             <Route exact path="/articles/:id"><ArticleRoutes/></Route>
             <Route exact path="/test6/:id"><Test6/></Route>
             <Route exact path="/upload-image"><Upload /></Route>
             <Route exact path="/signup"><Signup /></Route>
             <Route exact path="/login"><Login /></Route>
             <Route exact path="/socket"><Socket /></Route>
             <Route exact path="/"><Home /></Route>
             <Route exact path="*"><NotFound /></Route>
           </Switch>
         </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
