import React from 'react';
import './App.css';

import {
    EuiOverlayMask,
    EuiLoadingSpinner, EuiHeader, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderLogo, EuiPage, EuiPageSideBar
} from "@elastic/eui";

import '@elastic/eui/dist/eui_theme_light.css';
import MainLayout from "./bundles/common/components/MainLayout";
import VotingPage from "./bundles/routes/voting/page";
import LoginPage from "./bundles/routes/login/page";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import LoadingContext from "./bundles/common/contexts/LoadingContext";
import UserContext from "./bundles/common/contexts/UserContext";
import LoadingOverlay from 'react-loading-overlay';
import Header from "./bundles/common/components/header/header";

import {auth} from "./bundles/common/services/firebase";

console.log(UserContext);

class App extends React.Component {
    state = {
        loading: false,
        user: {
            displayName: "Walid Sabihi"
        }
    };

    componentDidMount() {
        this.loadUser();
    }


    async loadUser() {
        let user = await auth.getUser();
        alert(JSON.stringify(user));
        this.setState({user});

    }

    render() {
        let loadingCtx = {
            state: {
                loading: this.state.loading
            },
            set: (val) => {
                this.setState({
                    loading: val
                });
            }
        };

        let userCtx = {
            user: this.state.user,
            set: (val) => {
                this.setState({
                    user: val
                })
            }
        };

        return (
            <Router>
                <UserContext.Provider value={userCtx}>
                    <LoadingContext.Provider value={loadingCtx}>
                        <LoadingContext.Consumer>
                            {ctx => (
                                <LoadingOverlay active={ctx.state.loading}
                                                spinner
                                                text='Logging in...'
                                                fadeSpeed={100}>
                                    {/*<div style={{"height": "100vh"}}>*/}
                                    <div>
                                        <UserContext.Consumer>
                                            {userCtx => (
                                                <Header userCtx={userCtx}/>
                                            )}
                                        </UserContext.Consumer>
                                        <MainLayout contentTitle={"Main"}>
                                            <Switch>
                                                <Route path={"/login"}>
                                                    <UserContext.Consumer>
                                                        {userCtx => (
                                                            <LoginPage userCtx={userCtx}/>
                                                        )}
                                                    </UserContext.Consumer>
                                                </Route>
                                                <Route path={"/"}>
                                                    <UserContext.Consumer>
                                                        {userCtx => (
                                                            <VotingPage userCtx={userCtx}/>
                                                        )}
                                                    </UserContext.Consumer>
                                                </Route>
                                            </Switch>
                                        </MainLayout>
                                    </div>
                                </LoadingOverlay>
                            )}
                        </LoadingContext.Consumer>
                    </LoadingContext.Provider>
                </UserContext.Provider>
            </Router>
        );
    }
}

export default App;
