import * as React from "react";

import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiFieldPassword,
    EuiButton,
    EuiTabbedContent,
    EuiSpacer
} from "@elastic/eui";
import LoginContainer from "./container";
import LoadingContext from "../../common/contexts/LoadingContext";
import LoginForm from "./components/LoginForm";
import {Fragment} from "react";
import SignupForm from "./components/SignupForm";

class LoginPage extends React.Component {
    static contextType = LoadingContext;

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
        const tabs = [
            {
                id: 'login',
                name: 'Log in',
                content: (
                    <Fragment>
                        <EuiSpacer />
                        <LoginForm/>
                    </Fragment>
                ),
            },
            {
                id: 'signup',
                name: 'Sign up',
                content: (
                    <Fragment>
                        <EuiSpacer />
                        <SignupForm/>
                    </Fragment>
                ),
            },
        ]

        return (
            <LoginContainer>
                <EuiTabbedContent tabs={tabs}/>
            </LoginContainer>
        )
    }
}

export default LoginPage;