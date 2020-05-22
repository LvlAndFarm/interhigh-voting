import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
} from "@elastic/eui";

import '@elastic/eui/dist/eui_theme_light.css';
import UserContext from "../contexts/UserContext";
import {Breakpoint} from "react-media-breakpoints";

class MainLayout extends React.Component {
    render() {
        let props = this.props;
        return (
            <EuiPage>
                <Breakpoint
                    desktop={() => (<EuiPageSideBar></EuiPageSideBar>)}
                    tablet={() => (null)}
                    mobile={() => (null)}
                />
                <EuiPageBody component="div">
                    {/*<EuiPageHeader>*/}
                    {/*    <EuiPageHeaderSection>*/}
                    {/*        <EuiTitle size="l">*/}
                    {/*            <h1>Platform</h1>*/}
                    {/*        </EuiTitle>*/}
                    {/*    </EuiPageHeaderSection>*/}
                    {/*    <EuiPageHeaderSection>*/}
                    {/*        <EuiFlexGroup gutterSize={"s"}>*/}
                    {/*            <EuiFlexItem>*/}
                    {/*                <EuiButton size="s" onClick={() => window.alert('Button clicked')}>*/}
                    {/*                    Home*/}
                    {/*                </EuiButton>*/}
                    {/*            </EuiFlexItem>*/}
                    {/*            <EuiFlexItem>*/}
                    {/*                <EuiButton size="s" onClick={() => window.alert('Button clicked')}>*/}
                    {/*                    Log In*/}
                    {/*                </EuiButton>*/}
                    {/*            </EuiFlexItem>*/}
                    {/*        </EuiFlexGroup>*/}

                    {/*    </EuiPageHeaderSection>*/}
                    {/*</EuiPageHeader>*/}
                    {props.children}
                </EuiPageBody>
                <Breakpoint
                    desktop={() => (<EuiPageSideBar></EuiPageSideBar>)}
                    tablet={() => (null)}
                    mobile={() => (null)}
                />
            </EuiPage>
        );
    }
}

export default MainLayout;
