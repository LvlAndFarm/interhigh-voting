import * as React from "react";

import {
    EuiButton, EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle
} from "@elastic/eui";

class LoginContainer extends React.Component {
    render() {
        return (
            <EuiPageContent verticalPosition="center" horizontalPosition="center">
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>Please log in to continue</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>{this.props.children}</EuiPageContentBody>
            </EuiPageContent>
        )
    }
}

export default LoginContainer;