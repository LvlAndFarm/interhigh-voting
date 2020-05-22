import React, { Component } from 'react';

import {
    EuiAvatar,
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeaderSectionItemButton,
    EuiLink,
    EuiText,
    EuiSpacer,
    EuiPopover,
    EuiHeaderLink
} from '@elastic/eui';
import styled from "styled-components";

const UserAvatar = styled(EuiAvatar)`
    margin-right: 5px;
    margin-bottom: 2px;
`;

class HeaderUserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    onMenuButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    closeMenu = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        const button = (
            <EuiHeaderSectionItemButton
                aria-controls="headerUserMenu"
                aria-expanded={this.state.isOpen}
                aria-haspopup="true"
                aria-label="Account menu"
                onClick={this.onMenuButtonClick}>

                <EuiHeaderLink href="#">
                    <UserAvatar name={this.props.user.displayName} size="s" />
                    {this.props.user.displayName}
                </EuiHeaderLink>
            </EuiHeaderSectionItemButton>
        );

        return (
            <EuiPopover
                id="headerUserMenu"
                ownFocus
                button={button}
                isOpen={this.state.isOpen}
                anchorPosition="downRight"
                closePopover={this.closeMenu}
                panelPaddingSize="none">
                <div style={{ width: 320 }}>
                    <EuiFlexGroup
                        gutterSize="m"
                        className="euiHeaderProfile"
                        responsive={false}>
                        <EuiFlexItem grow={false}>
                            <EuiAvatar name={this.props.user.displayName} size="xl" />
                        </EuiFlexItem>

                        <EuiFlexItem>
                            <EuiText>
                                <p>{this.props.user.displayName}</p>
                            </EuiText>

                            <EuiSpacer size="m" />

                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFlexGroup justifyContent="spaceBetween">
                                        <EuiFlexItem grow={false}>
                                            <EuiLink href="">Edit profile</EuiLink>
                                        </EuiFlexItem>

                                        <EuiFlexItem grow={false}>
                                            <EuiLink href="">Log out</EuiLink>
                                        </EuiFlexItem>
                                    </EuiFlexGroup>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </div>
            </EuiPopover>
        );
    }
}

export default HeaderUserMenu;