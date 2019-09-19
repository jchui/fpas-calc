import React, { Component } from 'react';
import { List, Table } from 'semantic-ui-react';
import UoAData from '../data/2019uoa.json';
import UniData from '../data/2019medschools.json';

class Calculator extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    renderTableData(epm, qualifications, specialcircumstances, university) {
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
            

            const lowestScore = epm + qualifications + meanSJT - sdSJT;
            const highestScore = epm + qualifications + meanSJT + sdSJT;
            let probability;

            if (highestScore < allocatedDisplay) {
                probability = "Unlikely";
            } else if (lowestScore > allocatedDisplay) {
                probability = "Likely";
            } else {
                probability = "Average";
            }

            return (
                <Table.Row key={uoa}>
                    <Table.Cell>{uoa}</Table.Cell>
                    <Table.Cell>{places}</Table.Cell>
                    <Table.Cell>{allocatedDisplay}</Table.Cell>
                    <Table.Cell>{probability}</Table.Cell>
                </Table.Row>
            )
        })
     }

     renderCalculations(epm, qualifications, specialcircumstances, university) {
        let uniInfo = UniData.filter(function(value){
            return value.university === university;
        });
        const meanSJT = uniInfo[0].avg;
        const sdSJT = uniInfo[0].sd;
        const meanTotal = meanSJT + epm + qualifications;

        return (
            <div>
                University {university}
                Mean SJT {meanSJT}
                Standard deviation SJT {sdSJT}
                Mean Total {meanTotal}
                Probability {meanTotal - sdSJT} - {meanTotal + sdSJT}
            </div>
        )
     }

    render(){
        const {values: { epm, qualifications, specialcircumstances, university }} = this.props;

        return(
            <div>
                <List>
                    <List.Item>
                        <List.Content>EPM: {epm}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>Qualifications: {qualifications}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Content>Special Circumstances: {specialcircumstances}</List.Content>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>University: {university}</List.Content>
                    </List.Item>
                </List>

                <div>
                    {this.renderCalculations(epm, qualifications, specialcircumstances, university)}
                </div>

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
                        {this.renderTableData(epm, qualifications, specialcircumstances, university)}
                    </Table.Body>
                </Table>

            </div>
        )
    }
}

export default Calculator;