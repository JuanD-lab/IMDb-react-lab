import "./App.css";
import { Route, Switch } from "wouter";
import DirectorsList from "./components/Directors/directorsList";
/* import Navbar from "./components/Navbar"; */
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("./pages/Home"));
function App() {
    return (
        <div>
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/directors" component={DirectorsList} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
