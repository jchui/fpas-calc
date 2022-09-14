import React, { Component } from "react";
import { Form, Button, Progress, Icon } from "semantic-ui-react";

function handleDefaultChecked(qualifications, current) {
  if (qualifications === current) {
    return true;
  }
}

class PublicationsDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Form className="calculatorForm">
        <Progress percent={50} active />
        <div className="question">
          <p>Do you have any publications? (Up to 2 points)</p>
          <img
            src={process.env.PUBLIC_URL + "/img/take_a_note_2.png"}
            height="200px"
            alt="report"
          />
          <br />
          <div className="radios">
            <input
              type="radio"
              name="rGroup"
              value={0}
              id="r1"
              onChange={this.props.handleChange("publications")}
              defaultChecked={handleDefaultChecked(
                this.props.values.publications,
                0
              )}
            />
            <label className="radio" htmlFor="r1">
              <p>
                No publications
                <span className="points">+ 0 points</span>
              </p>
            </label>

            <input
              type="radio"
              name="rGroup"
              value={1}
              id="r2"
              onChange={this.props.handleChange("publications")}
              defaultChecked={handleDefaultChecked(
                this.props.values.publications,
                1
              )}
            />
            <label className="radio" htmlFor="r2">
              <p>
                <strong>x1</strong> Educational research paper published in a
                peer-reviewed journal with a PubMed ID number
                <span className="points">+ 1 points</span>
              </p>
            </label>

            <input
              type="radio"
              name="rGroup"
              value={2}
              id="r3"
              onChange={this.props.handleChange("publications")}
              defaultChecked={handleDefaultChecked(
                this.props.values.publications,
                2
              )}
            />
            <label className="radio" htmlFor="r3">
              <p>
                <strong>More than 1</strong> Educational research paper
                published in a peer-reviewed journal with a PubMed ID number
                <span className="points">+ 2 points</span>
              </p>
            </label>
          </div>
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
            Circumstances <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>
    );
  }
}

export default PublicationsDetails;
