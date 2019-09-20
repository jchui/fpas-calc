import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class Success extends Component{

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        return(
            <div className="calculatorForm success">
                <p>Your information has been successfully processed. Please see the table below for more details.</p>
                <Button onClick={this.back} className="formBtn" animated="vertical">
                    <Button.Content visible>Update Information</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow down' />
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

export default Success;