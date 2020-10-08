import React, { Component } from 'react';
import { Form, Button, Progress, Icon } from 'semantic-ui-react';
import UniData from '../data/2020medschools.json';

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
        return(
        <Form className="calculatorForm">
            <Progress percent={83} active />
            <div className="question">
                <p>Which university do you want your SJT scores to be predicted against?</p>

                <img src={process.env.PUBLIC_URL + "/img/uk.png"} height="200px" alt="uk"/>

                <Form.Field>
                    <label>University</label>
                    <select
                        onChange={this.props.handleChange('university')}
                        defaultValue={university}
                    >
                        {this.renderUniversities(university)}
                    </select>
                </Form.Field>
            </div>
            <Button onClick={this.back} className="formBtn" animated>
                    <Button.Content visible>Back</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow left' />
                    </Button.Content>
                </Button>
            <Button onClick={this.saveAndContinue} className="formBtn" animated>
                    <Button.Content visible>Complete Form</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
        </Form>
        )
    }
}

export default PersonalDetails;
