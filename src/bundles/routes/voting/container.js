import {
    EuiButton, EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle
} from "@elastic/eui";
import React from "react";

class VotingContainer extends React.Component {
    render() {
        let props = this.props;

        return (
            <EuiPageContent>
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>{props.contentTitle}</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                    <EuiPageContentHeaderSection>
                        <EuiButton type={"primary"} fill>Add Suggestion</EuiButton>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>{props.children}</EuiPageContentBody>
            </EuiPageContent>
        )
    }
}

export default VotingContainer;