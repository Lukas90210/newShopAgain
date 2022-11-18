import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Account from "../Account/Account";
import OurStory from "../About/OurStory/OurStory";
import ContactUs from "../About/ContactUs/ContactUs";
import Faqs from "../About/Faqs/Faqs";
import Journal from "../About/Journal/Journal";
import Shop from "../Shop/Shop";
import React from "react";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Account" component={Account} />
          <Route path="/OurStory" component={OurStory} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Faqs" component={Faqs} />
          <Route path="/Journal" component={Journal} />
          <Route path="/Shop" component={Shop} />
        </Switch>
      </Router>
    );
  }
}

export default RouterComponent;
