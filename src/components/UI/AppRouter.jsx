import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes,publicRoutes} from "../../router";
import {AuthContext} from "../../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);

    return (
            isAuth
        ?
            <Switch>
                {privateRoutes.map(route =>

                 <Route
                    component = {route.component}
                    path = {route.path}
                    exact = {route.exact}
                 />
                )}
            <Redirect to='/userpage'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>

                    <Route
                        component = {route.component}
                        path = {route.path}
                        exact = {route.exact}
                    />
                    )}
            <Redirect to='/registerpage'/>
            </Switch>

    );
};

export default AppRouter;