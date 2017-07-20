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

    render() {
        const errorMessage = this.props.getErrorMessage();
        return (
           	<div>
           		<label>Test</label>
	        	<input name="email" onChange={() => {}} value={this.props.getValue()} onChange={(e) => this.props.setValue(e.target.value)}/>
                 <span>{errorMessage}</span>
	      	</div>
        );
    }
}

export default HOC(Email);
