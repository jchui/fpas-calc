import React, { Component } from 'react';
import { Form, Button, Progress, Icon } from 'semantic-ui-react';

class EPMDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;

        return(
            <Form className="calculatorForm">
                <Progress percent={16} active />
                <div className="question">
                    <p>What is your estimated decile rank at medical school? (Up to 43 points)</p>

                    <img src={process.env.PUBLIC_URL + "/img/doctor.png"} height="200px" alt="doctor"/>

                    <select
                        onChange={this.props.handleChange('epm')}
                        defaultValue={values.epm}
                    >
                        <option key="1" value={43}>1st Decile - 43 EPM Points</option>
                        <option key="2" value={42}>2nd Decile - 42 EPM Points</option>
                        <option key="3" value={41}>3rd Decile - 41 EPM Points</option>
                        <option key="4" value={40}>4th Decile - 40 EPM Points</option>
                        <option key="5" value={39}>5th Decile - 39 EPM Points</option>
                        <option key="6" value={38}>6th Decile - 38 EPM Points</option>
                        <option key="7" value={37}>7th Decile - 37 EPM Points</option>
                        <option key="8" value={36}>8th Decile - 36 EPM Points</option>
                        <option key="9" value={35}>9th Decile - 35 EPM Points</option>
                        <option key="10" value={34}>10th Decile - 34 EPM Points</option>
                    </select>
                </div>
                <Button onClick={this.saveAndContinue} className="formBtn" animated>
                    <Button.Content visible>Save and Continue</Button.Content>
                    <Button.Content hidden>
                        Qualifications <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                
            </Form>
        )
    }
}

export default EPMDetails;