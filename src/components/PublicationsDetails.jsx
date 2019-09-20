import React, { Component } from 'react';
import { Form, Button, Progress, Icon } from 'semantic-ui-react';

class PublicationsDetails extends Component{

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
            <Form className="calculatorForm">
                <Progress percent={50} active />
                <div className="question">
                    <p>Do you have any publications? (2 points)</p>
                    <img src={process.env.PUBLIC_URL + "/img/take_a_note_2.png"} height="200px" alt="report"/>
                    <br/>
                    <Button.Group size='large'>
                        <Button
                            value={2}
                            onClick={this.props.handleChange('publications')}
                            active={!values.publications ? false : true}
                        >Yes</Button>
                        <Button.Or />
                        <Button
                            value={0}
                            onClick={this.props.handleChange('publications')}
                            active={!values.publications ? true : false}
                        >No</Button>
                    </Button.Group>
                </div>
                <Button onClick={this.back} className="formBtn" animated>
                    <Button.Content visible>Back</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow left' />
                    </Button.Content>
                </Button>
                <Button onClick={this.saveAndContinue} className="formBtn" animated>
                    <Button.Content visible>Save and Continue</Button.Content>
                    <Button.Content hidden>
                        Circumstances <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Form>
        )
    }
}

export default PublicationsDetails;