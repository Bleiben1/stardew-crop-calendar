import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './downNavBar.css'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div className="downNavegationSection">
        <ul className="navegationList">
          <li>
            <Link to="/how">How To</Link>
          </li>
          <li>
            <Link to="/about">About the project</Link>
          </li>
          <li>
            <Link to="/me">About Me</Link>
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/how" render={ () => <How />}>
            <How />
          </Route>
          <Route path="/about" render={ () => <About />}>
            <About />
          </Route>
          <Route path="/me" render={ () => <Me />}>
            <Me />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function How() {
  return (
    <div>
      <h2>Hot to ...</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About the project</h2>
    </div>
  );
}

function Me() {
  return (
    <div>
      <h2>About Me</h2>
    </div>
  );
}
