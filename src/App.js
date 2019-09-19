/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import MainForm from './components/MainForm';

class App extends Component {
    render() {
        return (
            <Container textAlign="center">
                <MainForm />
            </Container>
        );
    }
}

export default App;
