import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import UniData from '../data/2019medschools.json';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    renderUniversities(university) {
        return UniData.map((unis, index) => {
            const { university } = unis;
            return (
                <option key={university} value={university}>{university}</option>
            )
        })
     }

    render(){
        const {values: { university }} = this.props;
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Field>
                <label>University</label>
                <select
                    onChange={this.props.handleChange('university')}
                    defaultValue={values.university}
                >
                    {this.renderUniversities(university)}
                </select>
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;