import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const landingHeaderData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60a7577bc1327c975bf6fa8a/releases/60a75bba9a8d3176266d3ba2/img/rectangle-1@1x.svg",
};

const rectangle1Data = {
  src: "./images/Rectangle2.png"};

const button1Data = {
    children: "JOIN",
};

const button12Data = {
    children: "JOIN",
};

const landingPageData = {
    working: "./images/working.png",
    people: "./images/people.png",
    group: "./images/group.png",
    vector: "./images/vector.png",
    learning: "./images/learning.png",
    certificate: "./images/certificate.png",
    paper: "./images/paper.png",
    hat: "./images/hat.png",
    vector5: "./images/insta.png",
    vector6: "./images/fb.png",
    vector7: "./images/linkedin.png",
    line: "./images/line.png",
    copyright: "./images/copyright.png",
    landingHeaderProps: landingHeaderData,
    button1Props: button1Data,
    button12Props: button12Data,
    rectangle1Props: rectangle1Data,
};

