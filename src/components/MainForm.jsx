import React, { Component } from "react";
import EPMDetails from "./EPMDetails";
import QualificationsDetails from "./QualificationsDetails";
import PublicationsDetails from "./PublicationsDetails";
import CircumstancesDetails from "./CircumstancesDetails";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
import Calculator from "./Calculator";
import Error from "./Error";

class MainForm extends Component {
  state = {
    step: 1,
    epm: 43,
    specialcircumstances: false,
    university: "Overall Applicants (2020)",
    email: "",
    sort: false,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    window.scrollTo(0, 0);
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    window.scrollTo(0, 0);
  };

  str2bool(value) {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  }

  handleChange = (input) => (e) => {
    if (input === "epm") {
      this.setState({ [input]: parseInt(e.target.value) });
    } else {
      this.setState({
        [input]:
          e.target.type !== "select-one"
            ? parseInt(e.target.value)
            : e.target.value,
      });
    }
  };

  handleSort = (input) => (e) => {
    this.setState({ [input]: this.str2bool(e.target.value) });
  };

  render() {
    const { step } = this.state;
    const { epm, specialcircumstances, university, email, sort } = this.state;
    const values = { epm, specialcircumstances, university, email, sort };
    switch (step) {
      case 1:
        return (
          <div>
            <EPMDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Calculator handleSort={this.handleSort} values={values} />
          </div>
        );
      case 2:
        return (
          <div>
            <CircumstancesDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Calculator handleSort={this.handleSort} values={values} />
          </div>
        );
      case 3:
        return (
          <div>
            <PersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Calculator handleSort={this.handleSort} values={values} />
          </div>
        );
      case 4:
        return (
          <div>
            <Success
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Calculator handleSort={this.handleSort} values={values} />
          </div>
        );
      default:
        return <Error />;
    }
  }
}

export default MainForm;
