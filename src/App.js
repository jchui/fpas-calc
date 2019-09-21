import React, { Component } from 'react';
import './App.scss';
import { Container, Button, Icon } from 'semantic-ui-react';
import MainForm from './components/MainForm';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-24142610-17');
    ReactGA.pageview('auto');
}

initializeReactGA();

class App extends Component {
    render() {
        return (
            <div>
              <div className="header">
                <Container>
                <a href="mailto:jeremy+fpas@jchui.me" className="right">Report Error</a>
                <h1><strong>FPAS</strong> Calculator ⋅ 2020 Application Cycle</h1>
                </Container>
              </div>
              <Container textAlign="center">
                  <MainForm />
              </Container>
              <div className="footer">
                <a href="https://jchui.me">
                <Button animated="fade">
                      <Button.Content visible>Built by Jeremy Chui.</Button.Content>
                      <Button.Content hidden>
                          <Icon name='heart' />
                      </Button.Content>
                  </Button>
                  </a>
              </div>
            </div>
        );
    }
}

export default App;
