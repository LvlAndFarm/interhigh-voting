import {EuiFlexGroup, EuiFlexItem} from "@elastic/eui";
import SuggestionItem from "./SuggestionItem";
import React, {useState} from "react";
import SuggestionsContext from "../contexts/SuggestionsContext";

class SuggestionList extends React.Component {
    state = {
        // suggestions: [
        //     {
        //         title: "Lorem ipsum number 1",
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est mauris, sit amet consequat metus condimentum quis. Donec cursus, velit sed egestas porttitor, erat leo pharetra est, eget ornare ipsum mi quis lacus. Praesent mollis est non commodo bibendum. Phasellus egestas magna ut erat malesuada eleifend. Duis mollis tellus vitae erat vehicula, vel sagittis ",
        //         votes: 47,
        //         voteStatus: 0
        //     },
        //     {
        //         title: "Lorem ipsum number 2",
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est mauris, sit amet consequat metus condimentum quis. Donec cursus, velit sed egestas porttitor, erat leo pharetra est, eget ornare ipsum mi quis lacus. Praesent mollis est non commodo bibendum. Phasellus egestas magna ut erat malesuada eleifend. Duis mollis tellus vitae erat vehicula, vel sagittis ",
        //         votes: 10,
        //         voteStatus: -1
        //     },
        //     {
        //         title: "Lorem ipsum number 3",
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est mauris, sit amet consequat metus condimentum quis. Donec cursus, velit sed egestas porttitor, erat leo pharetra est, eget ornare ipsum mi quis lacus. Praesent mollis est non commodo bibendum. Phasellus egestas magna ut erat malesuada eleifend. Duis mollis tellus vitae erat vehicula, vel sagittis ",
        //         votes: 24,
        //         voteStatus: 0
        //     },
        //     {
        //         title: "This is a sample title",
        //         description: "Lorem ipsum dolor sit amet labla blakslakslaslka",
        //         votes: 35,
        //         voteStatus: 1
        //     }
        // ]
    };

    onVote = (index, status) => {
        let sugList = this.props.suggCtx.suggestions;
        if (sugList[index].voteStatus === status) {
            sugList[index].votes -= status;
            sugList[index].voteStatus = 0;
        } else {
            sugList[index].votes += status - sugList[index].voteStatus;
            sugList[index].voteStatus = status;
        }

        this.props.suggCtx.set(sugList)
    };

    render() {

        return (
            <>
                {this.props.suggCtx.suggestions.map((suggestion, index) => (
                    <EuiFlexItem key={index}>
                        <SuggestionItem {...suggestion} onVote={status => this.onVote(index, status)}/>
                    </EuiFlexItem>
                ))}
            </>
        )
    }
}

export default SuggestionList;