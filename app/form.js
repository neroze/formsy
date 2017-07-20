import React, { Component, PropTypes } from 'react';
import Email from './email';
import Formsy from 'formsy-react';

class Form extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
            	<Email name="email" innerRef={(c) => { this.email = c; }} />
            	<div className="buttons">
		          <button type="submit" >Submit</button>
		        </div>
            </Formsy.Form>
        );
    }
}

export default Form;
