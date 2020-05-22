import {EuiHeader, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem,
    EuiHeaderLinks, EuiHeaderLink} from "@elastic/eui";
import React from "react";
import HeaderUserMenu from "./userMenu";

class Header extends React.Component {
    render() {
        return (
            <EuiHeader>
                <EuiHeaderSection grow={false}>
                    <EuiHeaderSectionItem border="right">
                        <EuiHeaderLogo
                            iconType="https://vectr.com/lvlandfarm/a2xiJEfDVV.svg?width=123&height=128&select=a2xiJEfDVVpage0"
                            href="#"
                            aria-label="Go to home page"
                        >
                            UserVotes
                        </EuiHeaderLogo>
                    </EuiHeaderSectionItem>
                    <EuiHeaderLinks>
                        <EuiHeaderLink href="#" isActive>
                            Vote
                        </EuiHeaderLink>

                        <EuiHeaderLink href="#">Settings</EuiHeaderLink>

                        <EuiHeaderLink iconType="help" href="#">
                            Report a bug
                        </EuiHeaderLink>
                    </EuiHeaderLinks>
                    <EuiHeaderSectionItem border="right">
                    </EuiHeaderSectionItem>
                </EuiHeaderSection>

                {/*{renderBreadcrumbs()}*/}

                <EuiHeaderSection side="right">
                    <EuiHeaderSectionItem>
                        <HeaderUserMenu user={this.props.userCtx.user}/>
                    </EuiHeaderSectionItem>

                    <EuiHeaderSectionItem>
                    </EuiHeaderSectionItem>

                    <EuiHeaderSectionItem>
                    </EuiHeaderSectionItem>
                </EuiHeaderSection>
            </EuiHeader>
        );
    }
}

export default Header;