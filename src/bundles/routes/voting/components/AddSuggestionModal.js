import * as React from "react";
import {
    EuiOverlayMask,
    EuiModal,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiModalBody,
    EuiModalFooter,
    EuiButtonEmpty,
    EuiButton,
    EuiFormRow,
    EuiFieldText,
    EuiTextArea
} from "@elastic/eui"

class AddSuggestionModal extends React.Component {
    state = {
        title: "",
        description: ""
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    closeModal = () => {
        this.props.onSubmit(null);
    };

    onSubmit = () => {
        this.props.onSubmit(this.state);
    };

    render() {
        if(!this.props.visible) return null;

        return (
            <EuiOverlayMask>
                <EuiModal onClose={() => {}} initialFocus="[name=popswitch]">
                    <EuiModalHeader>
                        <EuiModalHeaderTitle>Add suggestion</EuiModalHeaderTitle>
                    </EuiModalHeader>

                    <EuiModalBody>

                        <EuiFormRow label="Suggestion title">
                            <EuiFieldText name="title"
                                          value={this.state.title}
                                          onChange={e => this.onChange(e)} />
                        </EuiFormRow>

                        <EuiFormRow label="Description">
                            <EuiTextArea
                                placeholder="Placeholder text"
                                name={"description"}
                                value={this.state.description}
                                onChange={e => this.onChange(e)}
                            />
                        </EuiFormRow>

                    </EuiModalBody>

                    <EuiModalFooter>
                        <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>

                        <EuiButton onClick={this.onSubmit} fill>
                            Add
                        </EuiButton>
                    </EuiModalFooter>
                </EuiModal>
            </EuiOverlayMask>
        );
    }
}

export default AddSuggestionModal;