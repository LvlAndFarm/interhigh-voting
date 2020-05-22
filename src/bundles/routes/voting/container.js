import {
    EuiButton, EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle
} from "@elastic/eui";
import React from "react";
import AddSuggestionModal from "./components/AddSuggestionModal";
import SuggestionsContext from "../../common/contexts/SuggestionsContext";

class VotingContainer extends React.Component {
    state = {
        addModalOpen: false,
        suggestions: [
            {
                title: "Lorem ipsum number 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est mauris, sit amet consequat metus condimentum quis. Donec cursus, velit sed egestas porttitor, erat leo pharetra est, eget ornare ipsum mi quis lacus. Praesent mollis est non commodo bibendum. Phasellus egestas magna ut erat malesuada eleifend. Duis mollis tellus vitae erat vehicula, vel sagittis ",
                votes: 47,
                voteStatus: 0
            },
            {
                title: "Lorem ipsum number 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est mauris, sit amet consequat metus condimentum quis. Donec cursus, velit sed egestas porttitor, erat leo pharetra est, eget ornare ipsum mi quis lacus. Praesent mollis est non commodo bibendum. Phasellus egestas magna ut erat malesuada eleifend. Duis mollis tellus vitae erat vehicula, vel sagittis ",
                votes: 10,
                voteStatus: -1
            },
            {
                title: "Lorem ipsum number 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est mauris, sit amet consequat metus condimentum quis. Donec cursus, velit sed egestas porttitor, erat leo pharetra est, eget ornare ipsum mi quis lacus. Praesent mollis est non commodo bibendum. Phasellus egestas magna ut erat malesuada eleifend. Duis mollis tellus vitae erat vehicula, vel sagittis ",
                votes: 24,
                voteStatus: 0
            },
            {
                title: "This is a sample title",
                description: "Lorem ipsum dolor sit amet labla blakslakslaslka",
                votes: 35,
                voteStatus: 1
            }
        ],

    };

    // CONTEXT SPECIFIC CALLBACKS

    onAddSugg = (sugg) => {
        let suggItem = {
            title: sugg.title,
            description: sugg.description,
            votes: 1,
            voteStatus: 1
        };
        this.setState({
            suggestions: [suggItem, ...this.state.suggestions]
        });
    };

    setSuggs = (suggs) => {
        this.setState({
            suggestions: suggs
        });
    };

    setModalOpen = (val) => {
        this.setState({
            addModalOpen: val
        });
    };

    // MODAL SPECIFIC CALLBACK

    onAddSubmit= (suggestion) => {
        this.setModalOpen(false);
        this.onAddSugg(suggestion);
    };

    render() {
        let props = this.props;

        let suggCtx = {
            suggestions: this.state.suggestions,
            addSugg: this.onAddSugg,
            set: this.setSuggs
        };

        return (
            <SuggestionsContext.Provider value={suggCtx}>
                <EuiPageContent>
                    <EuiPageContentHeader>
                        <EuiPageContentHeaderSection>
                            <EuiTitle>
                                <h2>{props.contentTitle}</h2>
                            </EuiTitle>
                        </EuiPageContentHeaderSection>
                        <EuiPageContentHeaderSection>
                            <EuiButton type={"primary"} fill onClick={e => this.setModalOpen(true)}>Add Suggestion</EuiButton>
                        </EuiPageContentHeaderSection>
                    </EuiPageContentHeader>
                    <EuiPageContentBody>{props.children}</EuiPageContentBody>

                    <AddSuggestionModal visible={this.state.addModalOpen} onSubmit={this.onAddSubmit}/>
                </EuiPageContent>
            </SuggestionsContext.Provider>
        )
    }
}

export default VotingContainer;