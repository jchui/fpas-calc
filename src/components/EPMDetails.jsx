import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class EPMDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>EPM</label>
                    <input
                    type='number'
                    placeholder='34'
                    onChange={this.props.handleChange('epm')}
                    defaultValue={values.epm}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default EPMDetails;