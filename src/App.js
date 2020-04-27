import React from 'react';
import './App.css';

import {
    EuiOverlayMask,
    EuiLoadingSpinner
} from "@elastic/eui";

import '@elastic/eui/dist/eui_theme_light.css';
import MainLayout from "./bundles/common/components/MainLayout";
import VotingPage from "./bundles/routes/voting/page";
import LoginPage from "./bundles/routes/login/page";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import LoadingContext from "./bundles/common/contexts/LoadingContext";
import LoadingOverlay from 'react-loading-overlay';

class App extends React.Component {
    state = {
        loading: false
    };

    render() {
        let loadingCtx = {
            state: this.state,
            set: (val) => {
                this.setState({
                    loading: val
                });
            }
        };

        return (
            <Router>
                <LoadingContext.Provider value={loadingCtx}>
                    <LoadingContext.Consumer>
                        {ctx => (
                            <LoadingOverlay active={ctx.state.loading}
                                            spinner
                                            text='Logging in...'
                                            fadeSpeed={100}>
                                <div style={{"height": "100vh"}}>
                                    <MainLayout contentTitle={"Main"}>
                                        <Switch>
                                            <Route path={"/login"}>
                                                <LoginPage/>
                                            </Route>
                                            <Route path={"/"}>
                                                <VotingPage/>
                                            </Route>
                                        </Switch>
                                    </MainLayout>
                                </div>
                            </LoadingOverlay>
                        )}
                    </LoadingContext.Consumer>
                </LoadingContext.Provider>
            </Router>
        );
    }
}

export default App;
