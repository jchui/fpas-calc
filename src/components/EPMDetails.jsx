import React, { Component } from "react";
import { Form, Button, Progress, Icon } from "semantic-ui-react";

class EPMDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <Form className="calculatorForm">
        <Progress percent={33} active />
        <div className="question">
          <p>
            What is your estimated decile rank at medical school? (Up to 50
            points)
          </p>

          <img
            src={process.env.PUBLIC_URL + "/img/doctor.png"}
            height="200px"
            alt="doctor"
          />

          <select
            onChange={this.props.handleChange("epm")}
            defaultValue={values.epm}
          >
            <option key="1" value={50}>
              1st Decile - 50 EPM Points
            </option>
            <option key="2" value={49}>
              2nd Decile - 49 EPM Points
            </option>
            <option key="3" value={48}>
              3rd Decile - 48 EPM Points
            </option>
            <option key="4" value={47}>
              4th Decile - 47 EPM Points
            </option>
            <option key="5" value={46}>
              5th Decile - 46 EPM Points
            </option>
            <option key="6" value={45}>
              6th Decile - 45 EPM Points
            </option>
            <option key="7" value={44}>
              7th Decile - 44 EPM Points
            </option>
            <option key="8" value={43}>
              8th Decile - 43 EPM Points
            </option>
            <option key="9" value={42}>
              9th Decile - 42 EPM Points
            </option>
            <option key="10" value={41}>
              10th Decile - 41 EPM Points
            </option>
          </select>
        </div>
        <Button onClick={this.saveAndContinue} className="formBtn" animated>
          <Button.Content visible>Save and Continue</Button.Content>
          <Button.Content hidden>
            Qualifications <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>
    );
  }
}

export default EPMDetails;
