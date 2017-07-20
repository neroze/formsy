import React, { Component, PropTypes } from 'react';
import Email from './email';
import Formsy from 'formsy-react';

class Form extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
        this.showEmail = this.showEmail.bind(this);
    }

    showEmail(){
        alert(this.email.getValue())
    }

    render() {
        return (
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
            	<Email
                    validations={{
                        isEmail: true,
                        maxLength: 50,
                        // required: true
                    }}

                    validationErrors={{
                        isEmail: 'You have to type valid email',
                        maxLength: 'You can not type in more than 50 characters',
                        // required: 'Field required'
                    }}
                    name="email" ref={(c) => { this.email = c; }} required />
            	<div className="buttons">
		          <button type="submit" onClick={this.showEmail} >Submit</button>
		        </div>
            </Formsy.Form>
        );
    }
}

export default Form;
