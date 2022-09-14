import React, { Component } from "react";
import preval from "preval.macro";
import { Table, Button } from "semantic-ui-react";
import UoAData from "../data/2020uoa.json";
import UniData from "../data/2020medschools.json";
import ReactGA from "react-ga";
import moment from "moment";

class Calculator extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  renderTableData(epm, specialcircumstances, university) {
    let arr = [];
    let uniInfo = UniData.filter(function (value) {
      return value.university === university;
    });

    const meanSJT = uniInfo[0].avg;
    const sdSJT = uniInfo[0].sd;
    const minScore = epm + meanSJT - sdSJT;
    const maxScore = epm + meanSJT + sdSJT;

    Object.keys(UoAData).forEach(function (key) {
      let tempList = [];

      const uoa = UoAData[key]["uoa"];
      const places = UoAData[key]["places"];
      const allocated =
        specialcircumstances === 1 && !!UoAData[key]["allocatedsc"]
          ? UoAData[key]["allocatedsc"]
          : UoAData[key]["allocated"];

      let score;
      let probability;

      if (minScore > allocated) {
        score = minScore - allocated;
        probability = "Likely";
      } else if (maxScore < allocated) {
        score = maxScore - allocated;
        probability = "Unlikely";
      } else {
        score = 0;
        probability = "Average";
      }

      tempList.push(uoa);
      tempList.push(places);
      tempList.push(allocated);
      tempList.push(score);
      tempList.push(probability);

      arr.push(tempList);
    });

    return arr;
  }

  renderTable(tableData, sort) {
    ReactGA.event({
      category: "User",
      action: "Calculate FPAS Results",
    });

    const outputData = sort
      ? tableData.sort((a, b) => (a[2] > b[2] ? 1 : -1))
      : tableData.sort((a, b) => (a[0] > b[0] ? 1 : -1));

    return outputData.map((uoa, index) => (
      <Table.Row key={outputData[index][0]}>
        <Table.Cell>
          <span className={outputData[index][4]}>{outputData[index][0]}</span>
        </Table.Cell>
        <Table.Cell>
          <span className={outputData[index][4]}>{outputData[index][1]}</span>
        </Table.Cell>
        <Table.Cell>
          <span className={outputData[index][4]}>
            {outputData[index][2].toFixed(2)}
            <span>
              {outputData[index][3].toFixed(2)} points from predicted score
            </span>
          </span>
        </Table.Cell>
        <Table.Cell className={outputData[index][4]}>
          {outputData[index][4]}
        </Table.Cell>
      </Table.Row>
    ));
  }

  renderCalculations(epm, specialcircumstances, university) {
    let uniInfo = UniData.filter(function (value) {
      return value.university === university;
    });
    const { values } = this.props;
    const meanSJT = uniInfo[0].avg;
    const sdSJT = uniInfo[0].sd;
    const lowestScore = (epm + meanSJT - sdSJT).toFixed(2);
    const highestScore = (epm + meanSJT + sdSJT).toFixed(2);

    return (
      <div>
        <div className="userData">
          <p>
            You currently have
            <strong> {epm} points</strong> from your performance at university .
          </p>

          {specialcircumstances === 1 ? (
            <p>
              <strong>Special Circumstances</strong> have been taken into
              consideration.
            </p>
          ) : (
            ""
          )}

          <p>
            Mean SJT Score from <strong>{university}</strong> is{" "}
            <strong>{meanSJT}</strong> with a standard deviation of{" "}
            <strong>{sdSJT}</strong>.
          </p>
        </div>
        <div className="userDataSummary">
          <p>
            This means that statistically you have a{" "}
            <strong>68.27% chance</strong> of scoring between{" "}
            <strong>
              {lowestScore} - {highestScore}
            </strong>{" "}
            on your application.
          </p>
        </div>
        <div className="tableSort">
          <p>Currently sorting results: </p>
          <Button.Group size="large">
            <Button
              value={false}
              onClick={this.props.handleSort("sort")}
              active={!values.sort ? true : false}
            >
              UoA (Alphabetically)
            </Button>
            <Button.Or />
            <Button
              value={true}
              onClick={this.props.handleSort("sort")}
              active={!values.sort ? false : true}
            >
              Probability
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }

  render() {
    const {
      values: { epm, specialcircumstances, university, sort },
    } = this.props;
    const buildTime = preval`module.exports = new Date();`;
    const buildTimestamp = moment(buildTime).format("DDMMYY:HHmm");

    const tableData = this.renderTableData(
      epm,
      specialcircumstances,
      university
    );

    return (
      <div>
        {this.renderCalculations(epm, specialcircumstances, university)}

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Unit of Application</Table.HeaderCell>
              <Table.HeaderCell>Places</Table.HeaderCell>
              <Table.HeaderCell>
                Lowest Allocated Score in 2020
              </Table.HeaderCell>
              <Table.HeaderCell>Probability</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderTable(tableData, sort)}</Table.Body>
        </Table>

        <div className="disclaimer">
          <p>
            Information on this page was sourced from{" "}
            <a
              href={
                process.env.PUBLIC_URL +
                "/data/2020 Recruitment Stats and Facts Report_FINAL.pdf"
              }
            >
              2020 Recruitment Stats and Facts Report.
            </a>{" "}
          </p>
          <p>Some information and stats may change as per UKFPO.</p>
          <br />

          <div className="build">
            <p>
              Build: <strong>{buildTimestamp}</strong>
            </p>
            <p>
              UoA Data:{" "}
              <a href={process.env.PUBLIC_URL + "/data/2020uoa.json"} download>
                Download JSON
              </a>
            </p>
            <p>
              Univeristy Data:{" "}
              <a
                href={process.env.PUBLIC_URL + "/data/2020medschools.json"}
                download
              >
                Download JSON
              </a>
            </p>
          </div>

          <br />
          <p>
            We try to keep this as up to date as possible, but do double check
            all content before applying as not all errors may have been
            reported.
          </p>
          <p>All the best with your applications!</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
