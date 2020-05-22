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
import AddSuggestionModal from "./components/AddSuggestionModal";
import SuggestionsContext from "../../common/contexts/SuggestionsContext";

class VotingPage extends React.Component {

    render() {
        let props = this.props;

        return (
            <VotingContainer contentTitle={"Voting"}>
                <EuiFlexGroup direction="column">
                    <EuiFlexItem>
                        <SortBy/>
                    </EuiFlexItem>
                    <SuggestionsContext.Consumer>
                        {ctx => <SuggestionList suggCtx={ctx}/>}
                    </SuggestionsContext.Consumer>
                </EuiFlexGroup>
            </VotingContainer>
        )
    }
}

export default VotingPage;