import React, { Component } from 'react';
import { Form, Button, Progress, Icon } from 'semantic-ui-react';

function handleDefaultChecked(qualifications, current) {
  if (qualifications === current) {
    return true;
  }
}

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

        return(
            <Form className="calculatorForm">
                <Progress percent={33} active />
                <div className="question">
                    <p>Do you have any additional qualifications? (Up to 5 points)</p>
                    <img src={process.env.PUBLIC_URL + "/img/graduation.png"} height="200px" alt="degree"/>

                    <div className="radios">
                        <input
                            type="radio"
                            name="rGroup"
                            value={0}
                            id="r1"
                            onChange={this.props.handleChange('qualifications')}
                            defaultChecked={handleDefaultChecked(this.props.values.qualifications, 0)} />
                        <label className="radio" htmlFor="r1">
                            <p>Primary Medical Qualification only</p>
                            <p>3rd class BMedSci awarded at University of Nottingham
                            <span className="points">+ 0 points</span>
                            </p>
                        </label>

                        <input
                            type="radio"
                            name="rGroup"
                            value={1}
                            id="r2"
                            onChange={this.props.handleChange('qualifications')}
                            defaultChecked={handleDefaultChecked(this.props.values.qualifications, 1)} />
                        <label className="radio" htmlFor="r2">
                            <p>3rd class honours degree</p>
                            <p>Unclassified honours degree</p>
                            <p>2.2 class BMedSci award at University of Nottingham
                            <span className="points">+ 1 points</span>
                            </p>
                        </label>

                        <input
                            type="radio"
                            name="rGroup"
                            value={2}
                            id="r3"
                            onChange={this.props.handleChange('qualifications')}
                            defaultChecked={handleDefaultChecked(this.props.values.qualifications, 2)} />
                        <label className="radio" htmlFor="r3">
                            <p>2.2 class honours degree</p>
                            <p>2.1 class BMedSci awarded at University of Nottingham
                            <span className="points">+ 2 points</span>
                            </p>
                        </label>

                        <input
                            type="radio"
                            name="rGroup"
                            value={3}
                            id="r4"
                            onChange={this.props.handleChange('qualifications')}
                            defaultChecked={handleDefaultChecked(this.props.values.qualifications, 3)} />
                        <label className="radio" htmlFor="r4">
                            <p>2.1 class honours degree</p>
                            <p>1st class BMedSci awarded at University of Nottingham
                            <span className="points">+ 3 points</span>
                            </p>
                        </label>

                        <input
                            type="radio"
                            name="rGroup"
                            value={4}
                            id="r5"
                            onChange={this.props.handleChange('qualifications')}
                            defaultChecked={handleDefaultChecked(this.props.values.qualifications, 4)} />
                        <label className="radio" htmlFor="r5">
                            <p>1st class honours degree</p>
                            <p>Postgraduate Master's degree (level 7 only), e.g. MPhil, MSc, MPharm</p>
                            <p>Bachelor of Dental Surgery (BDS)</p>
                            <p>Bachelor Veterinary Medicine (B Vet Med)
                            <span className="points">+ 4 points</span>
                            </p>
                        </label>

                        <input
                            type="radio"
                            name="rGroup"
                            value={5}
                            id="r6"
                            onChange={this.props.handleChange('qualifications')}
                            defaultChecked={handleDefaultChecked(this.props.values.qualifications, 5)} />
                        <label className="radio" htmlFor="r6">
                            <p>Doctoral degree (PhD, DPhil, etc)
                            <span className="points">+ 5 points</span>
                            </p>
                        </label>
                    </div>
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
                        Publications <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Form>
        )
    }
}

export default QualificationsDetails;
