import {
    EuiButton, EuiFlexGroup, EuiFlexItem, EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle
} from "@elastic/eui";
import React from "react";
import VotingContainer from "./container";
import SortBy from "../../common/components/SortBy";
import SuggestionItem from "../../common/components/SuggestionItem";
import SuggestionList from "../../common/components/SuggestionList";

class VotingPage extends React.Component {
    render() {
        let props = this.props;

        return (
            <VotingContainer>
                <EuiFlexGroup direction="column">
                    <EuiFlexItem>
                        <SortBy/>
                    </EuiFlexItem>
                    <SuggestionList/>
                </EuiFlexGroup>
            </VotingContainer>
        )
    }
}

export default VotingPage;