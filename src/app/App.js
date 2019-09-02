import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AddToCartButton } from '_app_components/AddToCartButton.js';

import { RightSideBar } from '_app/RightSideBar';

const Datepicker = React.lazy(() =>
  import(/*  webpackPrefetch: true, webpackChunkName: "datepicker" */ '_ui_components/Datepicker').then(module => ({
    default: module.Datepicker,
  })),
);

function handleClickApp(event) {
  console.log(event.target);
}

function Frame() {
  return (
    <section className="frame">

    </section>
  );
}

function Home() {
  const [state, setState] = React.useState(false);

  return (
    <div>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
      <AddToCartButton onClick={() => setState(true)} />
      <RightSideBar />
      {state && <About />}
    </div>
  );
}

function About() {
  return (
    <h2>
      About
      <React.Suspense fallback="Loading">
        <Datepicker />
      </React.Suspense>
    </h2>
  );
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div onClick={handleClickApp}>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export { App };
