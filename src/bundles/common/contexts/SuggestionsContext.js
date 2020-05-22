import React from "react";

const SuggestionsContext = React.createContext({
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
    addSugg: (index, value) => {},
});

export default SuggestionsContext;