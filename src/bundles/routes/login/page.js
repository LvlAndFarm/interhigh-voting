import * as React from "react";

import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiFieldPassword,
    EuiButton
} from "@elastic/eui";
import LoginContainer from "./container";
import LoadingContext from "../../common/contexts/LoadingContext";

class LoginPage extends React.Component {
    static contextType = LoadingContext;

    state = {
        field_email: "",
        field_pass: ""
    };

    onChange = (field_name, value) => {
        this.setState({
            [field_name]: value
        });
    };

    checkAccount = () => {
        let {field_email, field_pass} = this.state;
        if (!(field_email==="walid@sabihi.com")) return false;
        if (!(field_pass==="testtest")) return false;
        return true;
    };

    onSubmit = async () => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        let ctx = this.context;
        ctx.set(true);
        await sleep(2000);
        if (this.checkAccount()) {
            window.location.href = "/";
        }
        ctx.set(false);
    }

    render() {
        let {field_email, field_pass} = this.state;

        return (
            <LoginContainer>
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
            </LoginContainer>
        )
    }
}

export default LoginPage;