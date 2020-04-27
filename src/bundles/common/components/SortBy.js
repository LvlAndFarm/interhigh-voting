import {EuiFlexGroup, EuiFlexItem, EuiSelect, EuiTitle} from "@elastic/eui";
import React from "react";

function SortBy() {
    return (
        <EuiFlexGroup justifyContent={"flexStart"}>
            <EuiFlexItem grow={false}>
                <EuiTitle size="s">
                    <h3>Sort by: </h3>
                </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiSelect
                    id="selectDocExample"
                    options={[{value: "idc", text: "Relevant"}]}
                    value={{value: "idc", text: "Relevant"}}
                    onChange={e => {}}
                    aria-label="Use aria labels when no actual label is in use"
                />
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}

export default SortBy;