import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Courses from './Components/Courses/Courses'
import Teachers from './Components/Teachers/Teachers'
import NotFound from './Components/NotFound/NotFound'
import Enroll from './Components/Enroll/Enroll';


function App() {
  return (
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/teachers">
              <Teachers></Teachers>
            </Route>
            <Route path="/enroll">
              <Enroll></Enroll>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </div>
  );
}

export default App;
