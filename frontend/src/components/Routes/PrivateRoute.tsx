import { AppRoute } from "common/enums";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({developerComponent: DeveloperComponent, investorComponent: InvestorComponent, isAuth, role, ...rest}: any) => {
    console.log("auth: "+isAuth);
    return (
        <Route {...rest} render={props => (
            isAuth ?
                (role === "developer" 
                    ? <DeveloperComponent {...props} />
                    : <InvestorComponent {...props} />)
            : <Redirect to="/sign-in" />
        )} />
    );
};

export {PrivateRoute};