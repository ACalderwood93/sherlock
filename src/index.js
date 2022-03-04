import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./routes/Home";
import Case from "./routes/Case";
import NoMatch from "./routes/NoMatch/NoMatch";

const client = new ApolloClient({
  uri: "https://api.sherlock.pandapops.me",
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/case/:caseNumber" element={<Case />} />
        </Route>
        <Route
          path="*"
          element={<NoMatch/>}
        />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
