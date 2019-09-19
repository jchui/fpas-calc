import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { epm, qualifications, specialcircumstances, university, email }} = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Content>EPM: {epm}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>Qualifications: {qualifications}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Content>Special Circumstances: {specialcircumstances}</List.Content>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>University: {university}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
            </div>
        )
    }
}

export default Confirmation;