import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../../actions/auth";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from "../calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h4>ESPERE</h4>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isLoggedIn={!!uid}
            exact
            path="/login"
            component={LoginScreen}
          />
          <PrivateRoute
            isLoggedIn={!!uid}
            exact
            path="/"
            component={CalendarScreen}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
