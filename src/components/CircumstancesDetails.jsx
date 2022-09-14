import React, { Component } from "react";
import { Form, Button, Progress, Icon } from "semantic-ui-react";

class CircumstancesDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form className="calculatorForm">
        <Progress percent={66} active />
        <div className="question">
          <p>Will you be applying with special circumstances?</p>

          <img
            src={process.env.PUBLIC_URL + "/img/click_here.png"}
            height="200px"
            alt="click"
          />
          <br />

          <Button.Group size="large">
            <Button
              value={1}
              onClick={this.props.handleChange("specialcircumstances")}
              active={!values.specialcircumstances ? false : true}
            >
              Yes
            </Button>
            <Button.Or />
            <Button
              value={0}
              onClick={this.props.handleChange("specialcircumstances")}
              active={!values.specialcircumstances ? true : false}
            >
              No
            </Button>
          </Button.Group>
        </div>
        <Button onClick={this.back} className="formBtn" animated>
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <Button onClick={this.saveAndContinue} className="formBtn" animated>
          <Button.Content visible>Save and Continue</Button.Content>
          <Button.Content hidden>
            SJT <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>
    );
  }
}

export default CircumstancesDetails;
