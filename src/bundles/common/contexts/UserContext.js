import React from "react";

const UserContext = React.createContext({
    user: {
        name: "Walid Sabihi"
    },
    set: () => {}
});

export default UserContext;