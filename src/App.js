import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import CheckOut from "./CheckOut";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import DetailsPage from "./DetailsPage";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET__USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET__USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/productinfo">
            <Header />
            <SingleProduct />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/details">
            <DetailsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
