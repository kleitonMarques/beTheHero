import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/logon/index'
import Register from './pages/register/index'
import Profile from './pages/Profile/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}