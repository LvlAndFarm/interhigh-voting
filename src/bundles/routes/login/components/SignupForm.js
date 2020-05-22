import * as React from "react";
import {EuiButton, EuiFieldPassword, EuiFieldText, EuiForm, EuiFormRow} from "@elastic/eui";
import LoginContainer from "../container";
import {auth} from "../../../common/services/firebase";

class SignupForm extends React.Component {
    state = {
        field_email: "",
        field_pass: "",
        field_pass_confirm: "",
        field_name: ""
    };

    onChange = (field_name, value) => {
        this.setState({
            [field_name]: value
        });
    };

    onSubmit = async () => {
        let email = this.state.field_email.trim();
        if (!email.endsWith("@interhigh.co.uk")) {
            alert("Only InterHigh emails are allowed");
            return;
        }
        try {
            let user = await auth().createUserWithEmailAndPassword(this.state.field_email, this.state.field_pass);
            await user.user.updateProfile({
                displayName: this.state.field_name,
            });
            if (!user) {
                alert("YOU STUPID");
            }
            // alert(JSON.stringify(result));
        } catch (e) {
            alert(JSON.stringify(e));
        }
    };

    render() {
        let {field_email, field_pass, field_pass_confirm, field_name} = this.state;

        return (
            <EuiForm component="div">
                <EuiFormRow label="Email" helpText="" fullWidth>
                    <EuiFieldText name="field_email" fullWidth
                                  value={field_email}
                                  onChange={e => this.onChange("field_email", e.target.value)}
                    />
                </EuiFormRow>

                <EuiFormRow label="Full Name" helpText="" fullWidth>
                    <EuiFieldText name="field_name" fullWidth
                                  value={field_name}
                                  onChange={e => this.onChange("field_name", e.target.value)}
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

                <EuiFormRow label="Confirm Password" helpText="">
                    <EuiFieldPassword
                        placeholder="Password here.."
                        value={field_pass_confirm}
                        onChange={e => this.onChange("field_pass_confirm", e.target.value)}
                        aria-label="Use aria labels when no actual label is in use"
                    />
                </EuiFormRow>

                <EuiButton onClick={this.onSubmit} fill grow={true}>
                    Sign up
                </EuiButton>
            </EuiForm>
        )
    }
};

export default SignupForm;