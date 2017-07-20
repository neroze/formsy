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

 //    hangeValue(event) {
	//     this.props.setValue(event.target.value);
	// }

	validate() {
	    return !!this.props.getValue();
	}

    render() {
        return (
           	<div>
           		<label>Test</label>
	        	<input name="email" value={this.props.getValue()} onChange={(e) => this.props.setValue(e.target.value)}/>
	      	</div>
        );
    }
}

export default HOC(Email);
