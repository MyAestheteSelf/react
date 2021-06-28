import "./App.css";
import { NavBar } from "./MyComponents/NavBar";
import { Header } from "./MyComponents/Header";
import { Blogs } from "./MyComponents/Blogs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <NavBar />
                <Header />
                <Blogs />
              </>
            );
          }}
        ></Route>
        <Route exact path="/Blogs" render={()=>{
          return <>
            <NavBar/>
            <Blogs/>
          </>
        }}>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
