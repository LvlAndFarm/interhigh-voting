import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageSideBar,
    EuiTitle,
    EuiLink,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
} from "@elastic/eui";

import '@elastic/eui/dist/eui_theme_light.css';

class MainLayout extends React.Component {
    render() {
        let props = this.props;
        return (
            <EuiPage>
                <EuiPageSideBar></EuiPageSideBar>
                <EuiPageBody component="div">
                    <EuiPageHeader>
                        <EuiPageHeaderSection>
                            <EuiTitle size="l">
                                <h1>Platform</h1>
                            </EuiTitle>
                        </EuiPageHeaderSection>
                        <EuiPageHeaderSection>
                            <EuiFlexGroup gutterSize={"s"}>
                                <EuiFlexItem>
                                    <EuiButton size="s" onClick={() => window.alert('Button clicked')}>
                                        Home
                                    </EuiButton>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiButton size="s" onClick={() => window.alert('Button clicked')}>
                                        Log In
                                    </EuiButton>
                                </EuiFlexItem>
                            </EuiFlexGroup>

                        </EuiPageHeaderSection>
                    </EuiPageHeader>
                    {props.children}
                </EuiPageBody>
                <EuiPageSideBar></EuiPageSideBar>
            </EuiPage>
        );
    }
}

export default MainLayout;
