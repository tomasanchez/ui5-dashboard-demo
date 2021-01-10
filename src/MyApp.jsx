import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function MyApp() {
  return (
    <>
      <ShellBar
        logo={<img src="logo192.png" alt="React Logo" />}
        profile={<Avatar image="uk_flag.png" />}
        primaryTitle={"React + UI5"}
      >
        <ShellBarItem icon="add" text="Add" />
      </ShellBar>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail" component={Detail} />
          <Redirect from="/" to="/home" />
        </Switch>
      </ErrorBoundary>
    </>
  );
}
