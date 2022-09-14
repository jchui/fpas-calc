import React, { Component } from "react";
import "./App.scss";
import { Container, Button, Icon } from "semantic-ui-react";
import ReactGA from "react-ga";

import Feedback from "feeder-react-feedback";
import MainForm from "./components/MainForm";
import "feeder-react-feedback/dist/feeder-react-feedback.css";

function initializeReactGA() {
  ReactGA.initialize("UA-24142610-17");
  ReactGA.pageview("auto");
}

initializeReactGA();

function handleWebClick() {
  ReactGA.event({
    category: "User",
    action: "Redirect to JChui.me",
  });
  window.location.assign("https://jchui.me");
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Container>
            <a href="mailto:jeremy+fpas@jchui.me" className="right">
              Report Error
            </a>
            <h1>
              <strong>FPAS</strong> Calculator
            </h1>
          </Container>
        </div>
        <Container textAlign="center">
          <MainForm />
        </Container>
        <div className="footer">
          <Button animated="fade" onClick={handleWebClick}>
            <Button.Content visible>Built by Jeremy Chui.</Button.Content>
            <Button.Content hidden>
              <Icon name="heart" />
            </Button.Content>
          </Button>
        </div>
        <Feedback projectId="5f941c62a115a70004dcf099" email="true" />
      </div>
    );
  }
}

export default App;
