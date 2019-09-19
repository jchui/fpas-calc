import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Success extends Component{

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <Button onClick={this.back}>Back</Button>
            </div>
        )
    }
}

export default Success;