import React, { Component } from 'react';
import EPMDetails from './EPMDetails';
import QualificationsDetails from './QualificationsDetails';
import PublicationsDetails from './PublicationsDetails';
import CircumstancesDetails from './CircumstancesDetails';
import PersonalDetails from './PersonalDetails';
import Success from './Success';
import Calculator from './Calculator';
import Error from './Error';

class MainForm extends Component {
    state = {
        step: 1,
        epm: 43,
        qualifications: 0,
        publications: 0,
        specialcircumstances: false,
        university: 'Overall Applicants (2019)',
        email: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
        window.scrollTo(0, 0)
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
        window.scrollTo(0, 0)
    }

    handleChange = input => e => {
        if (input === 'epm') {
            this.setState({ [input]:  parseInt(e.target.value) });
        } else {
            this.setState({ [input]: e.target.type !== 'select-one' ? parseInt(e.target.value) : e.target.value });
        }

    }

    render(){
        const {step} = this.state;
        const { epm, qualifications, publications, specialcircumstances, university, email } = this.state;
        const values = { epm, qualifications, publications, specialcircumstances, university, email };
        switch(step) {
        case 1:
            return (
                <div>
                    <EPMDetails
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                    <Calculator
                        values={values}
                        />
                </div>
            )
        case 2:
            return (
                <div>
                    <QualificationsDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                    <Calculator
                        values={values}
                        />
                </div>
            )
        case 3:
            return (
                <div>
                    <PublicationsDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                    <Calculator
                        values={values}
                        />
                </div>
            )
        case 4:
            return (
                <div>
                    <CircumstancesDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                    <Calculator
                        values={values}
                        />
                </div>
            )
        case 5:
            return (
                <div>
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                    <Calculator
                        values={values}
                        />
                </div>
            )
        case 6:
            return (
                <div>
                    <Success
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                    <Calculator
                        values={values}
                        />
                </div>
            )
        default:
            return <Error />
        };
    }
}

export default MainForm;
