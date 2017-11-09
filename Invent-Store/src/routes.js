import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import Home from './component/home/home'


//The Febric sectiion


// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();





export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    {/* <IndexRoute component={Home} /> */}
                    
                </Route>
            </Router>
        )
    }
}