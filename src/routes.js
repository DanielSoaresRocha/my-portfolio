import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} exact path="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes