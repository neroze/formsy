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
        this.state ={
            validationErrors: {}
        }
    }

    showEmail(){
        // alert(this.email.getValue())
    }

    render() {
        console.log(this.state.validationErrors);
        return (
            <div>
                <Formsy.Form
                onValidSubmit={()=>{ alert('ok') }}
                onSubmit={(data, resetForm, invalidateForm) => {
                    console.log('submited', data);
                }}
                onInvalid={() => {
                    console.log("Invalid Invalid");
                }}
                onInvalidSubmit={(data,df, invalidateForm)=> {
                    invalidateForm({
                        email: "Email Field is Required"
                    })
                    console.log("Inalid attemps",data);
                    // alert('Fileds are required')
                }}

                // onChange={(data)=>{

                //     // console.log('data', data);
                // }}
                onValid={this.enableButton}
                className="login">
                	<Email
                        validations={{
                            isEmail: true,
                            maxLength: 50,
                            required: function(values, value){
                                return value !== '' ? true : "Field is required"

                            }
                            // required: true
                        }}

                        validationErrors={{
                            isEmail: 'You have to type valid email',
                            maxLength: 'You can not type in more than 50 characters',
                            required: 'Fileds is required'
                            // required: 'Field required'
                        }}
                        name="email" ref={(c) => { this.email = c; }} required />
                	<div className="buttons">
    		          <button type="submit" onClick={this.showEmail} >Submit</button>
    		        </div>
                </Formsy.Form>
            </div>
        );
    }
}

export default Form;
