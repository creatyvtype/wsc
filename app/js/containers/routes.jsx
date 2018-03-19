import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from 'containers/layout'

export default class Routes extends React.Component {

    render() {
        const history = createBrowserHistory()
        return (
            <Router history={history}>
                <Route path="/" component={Layout}>

                </Route>
            </Router>
        )
    }
}
