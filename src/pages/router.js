import React from "react"
import { Router, Location } from "@reach/router"
import Principal from './Principal'
import Detail from './Detail'

const Route = (props) => {
    return (
        <div className="app">
            <Location>
            {({ location }) => (
                <Router location={location} className="router">
                    <Principal path="/" location={props} />
                    <Detail path="/detail/:id" location={props} />
                </Router>
            )}
            </Location>
        </div>
    )
}

export default Route
