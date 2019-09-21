import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import UoAData from '../data/2019uoa.json';
import UniData from '../data/2019medschools.json';
import ReactGA from 'react-ga';

function handleMesslyClick() {
    ReactGA.event({
      category: 'User',
      action: 'Redirect to messly'
    });
    window.location.assign('http://messly.co.uk/training.html?ref=jchui');
}

class Calculator extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    renderTableData(epm, qualifications, publications, specialcircumstances, university) {

    ReactGA.event({
      category: 'User',
      action: 'Calculate FPAS Results'
    });

        return UoAData.map((uoas, index) => {
            const { uoa, places, allocated, allocatedsc } = uoas;

            let uniInfo = UniData.filter(function(value){
                return value.university === university;
            });
            const meanSJT = uniInfo[0].avg;
            const sdSJT = uniInfo[0].sd;

            let allocatedDisplay;
            if (!allocatedsc) {
                allocatedDisplay = allocated;
            } else {
                allocatedDisplay = specialcircumstances ? allocatedsc: allocated;
            }
            allocatedDisplay = allocatedDisplay.toFixed(2);


            const lowestScore = epm + qualifications + publications + meanSJT - sdSJT;
            const highestScore = epm + qualifications + publications + meanSJT + sdSJT;
            let probability;
            let probabilityDisplay;

            if (highestScore < allocatedDisplay) {
                probability = "Unlikely";
                probabilityDisplay = "-" + (allocatedDisplay - highestScore).toFixed(2) + " from predicted score (" + highestScore.toFixed(2) + ")";
            } else if (lowestScore > allocatedDisplay) {
                probability = "Likely";
                probabilityDisplay = "+" + (lowestScore - allocatedDisplay).toFixed(2) + " from predicted score (" + lowestScore.toFixed(2) + ")";
            } else {
                probability = "Average";
            }

            return (
                <Table.Row key={uoa}>
                    <Table.Cell><span className={probability}>{uoa}</span></Table.Cell>
                    <Table.Cell><span className={probability}>{places}</span></Table.Cell>
                    <Table.Cell>
                        <span className={probability}>
                        {allocatedDisplay}
                            <span>{probabilityDisplay}</span>
                        </span>
                        </Table.Cell>
                    <Table.Cell className={probability}>{probability}</Table.Cell>
                </Table.Row>
            )
        })
     }

     renderCalculations(epm, qualifications, publications, specialcircumstances, university) {
        let uniInfo = UniData.filter(function(value){
            return value.university === university;
        });
        const meanSJT = uniInfo[0].avg;
        const sdSJT = uniInfo[0].sd;
        const lowestScore = (epm + qualifications + publications + meanSJT - sdSJT).toFixed(2);
        const highestScore = (epm + qualifications + publications + meanSJT + sdSJT).toFixed(2);

        return (
            <div>
                <div className="userData">
                    <p>
                        You currently have
                        <strong> {epm} points</strong> from your performance at university
                        {((qualifications + publications) > 0 ) ?
                            <span> + <strong> {qualifications + publications} points</strong> from additional degrees and publications.</span>
                            : "."}
                    </p>

                    {(specialcircumstances === 1) ? <p><strong>Special Circumstances</strong> have been taken into consideration.</p> : ""}

                    <p>Mean SJT Score from <strong>{university}</strong> is <strong>{meanSJT}</strong> with a standard deviation of <strong>{sdSJT}</strong>.</p>
                </div>
                <div className="userDataSummary">
                    <p>This means that statistically you have a <strong>68.27% chance</strong> of scoring between <strong>{lowestScore} - {highestScore}</strong> on your application.</p>
                </div>
            </div>
        )
     }

    render(){
        const {values: { epm, qualifications, publications, specialcircumstances, university }} = this.props;
        return(
            <div>

                {this.renderCalculations(epm, qualifications, publications, specialcircumstances, university)}

                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Unit of Application</Table.HeaderCell>
                        <Table.HeaderCell>Places</Table.HeaderCell>
                        <Table.HeaderCell>Lowest Allocated Score in 2019</Table.HeaderCell>
                        <Table.HeaderCell>Probability</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderTableData(epm, qualifications, publications, specialcircumstances, university)}

                        <Table.Row key="messly">
                                <Table.Cell colSpan={4} className="messly">
                                    <center>
                                    <p
                                      onClick={handleMesslyClick}>
                                      Want to learn more? We've partnered with <strong>messly</strong> for peer reviews, GMC ratings, and other essential information on the Foundation Programme.
                                      <span className="start">Get Started</span>
                                    </p>
                                    </center>
                                </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <div className="disclaimer">
                    <p>Information on this page was sourced from <a href="https://www.foundationprogramme.nhs.uk/sites/default/files/2019-06/2019%20Recruitment%20Stats%20and%20Facts%20Report_FINAL.pdf">Foundation Programme 2019 Recruitment Stats and Facts.</a></p>
                    <p>Please ensure that you double check all content before applying as not all errors may have been reported.</p>
                    <p>All the best with your applications!</p>
                </div>

            </div>
        )
    }
}

export default Calculator;
