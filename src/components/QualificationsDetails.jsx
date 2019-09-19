import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class QualificationsDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>Qualifications</label>
                    <input
                    type='number'
                    placeholder='0'
                    onChange={this.props.handleChange('qualifications')}
                    defaultValue={values.qualifications}
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default QualificationsDetails;