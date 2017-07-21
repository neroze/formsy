import React, { Component, PropTypes } from 'react';
import {HOC} from 'formsy-react';

// @FormsyElement()
class Email extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
    }

	validate() {
	    return !!this.props.getValue();
	}

    changeValue(event) {
        console.log("Email Value : ",event.currentTarget.value);
        this.setValue(event.currentTarget.value);
    }


    render() {
        const errorMessage = this.props.getErrorMessage();
        return (
           	<div>
           		<label>Test {this.props.isRequired() ? '*' : null} </label>
	        	<input name="email"  value={this.props.getValue()} onChange={(e) => this.props.setValue(e.target.value)}/>
                 <span>{errorMessage}</span>
	      	</div>
        );
    }
}

export default HOC(Email);
