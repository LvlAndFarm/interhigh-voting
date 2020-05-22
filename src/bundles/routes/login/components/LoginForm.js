import * as React from "react";
import {EuiButton, EuiFieldPassword, EuiFieldText, EuiForm, EuiFormRow} from "@elastic/eui";
import LoginContainer from "../container";

import {auth} from "./../../../common/services/firebase";

class LoginForm extends React.Component {
    state = {
        formType: "login",
        field_email: "",
        field_pass: ""
    };

    onChange = (field_name, value) => {
        this.setState({
            [field_name]: value
        });
    };

    onSubmit = async () => {
        try {
            let result = await auth().signInWithEmailAndPassword(this.state.field_email, this.state.field_pass);
            if (!result) {
                alert("YOU STUPID");
            }
        } catch (e) {
            alert(JSON.stringify(e));
        }
    };

    render() {
        let {field_email, field_pass} = this.state;

        return (
            <EuiForm component="div">
                <EuiFormRow label="Email/Username" helpText="" fullWidth>
                    <EuiFieldText name="userid" fullWidth
                                  value={field_email}
                                  onChange={e => this.onChange("field_email", e.target.value)}
                    />
                </EuiFormRow>

                <EuiFormRow label="Password" helpText="">
                    <EuiFieldPassword
                        placeholder="Password here.."
                        value={field_pass}
                        onChange={e => this.onChange("field_pass", e.target.value)}
                        aria-label="Use aria labels when no actual label is in use"
                    />
                </EuiFormRow>

                <EuiButton onClick={this.onSubmit} fill grow={true}>
                    Log in
                </EuiButton>
            </EuiForm>
        )
    }
};

export default LoginForm;