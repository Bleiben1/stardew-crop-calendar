import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './downNavBar.css'

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
          <li>
            <Link to="/">Hide</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/how">
            <How />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function How() {
  return (
    <div className="calendar navegationListContent">
      <h2>How to ...</h2>
      <h3>...use this tool?</h3>
      <p>This tool is to plan out any sesason by giving you a visual hint on when a crop would be ready to harvest based on the day planted.
      For a basic use please follow the above instructions :</p>
      <ul>
        <li>Select the Season you are interested on planting, by default is Spring</li>
        <li>Then inside the calendar select the appropiate Day to plant</li>
        <li>Ones inside a Day, a window that show the current planted and harvestable crop would appear</li>
        <li>On the top of the window a select box would appear with all the available crop for the season</li>
        <li>Select one of the crops and press "Add" to be added on the list below</li>
      </ul>
      <h3>...save my calendar</h3>
      <p>You are allow to save your progress to keep working later after doing any change. This information is stored locally, so if the browser data 
      is deleted, your progress is too, so beware.</p>
      <ul>
        <li>Ones a change is made, an up-facing arrow would appear in the calendar's top-right corner</li>
        <li>Press such arrow to save your calendar</li>
        <li>After the save is done, the arrow would disappear until a new change happend to the calendar</li>
      </ul>
      <h3>...load my saved calendar</h3>
      <p>By default the tool check if there is a saved calendar on the browser and if there is, it's automatically loaded and ready to work</p>
      <ul>
        <li>Ones a change is made, a down-facing arrow appear in the calendar's top-right corner</li>
        <li>If at any point, you would like to discard changes and come back to the saved state, just press it.</li>
      </ul>
      <h3>...clear the screen</h3>
      <p>Maybe you would like to start all over again, maybe something don't look right, whatever is the reason you can erase all the crops planted and start with a blank canvas.
        Quick side note here, this does not modify the saved data, unless you save the blank calendar, and this clear is done just to the current season, leaving the other unaffected. </p>
        <ul>
          <li>To clear the current sesason's calendar, press the red button at the calendar's top-right corner</li>
        </ul>
    </div>
  );
}

function About() {
  return (
    <div className="calendar navegationListContent">
      <h2>About the project</h2>
      <p>This project was build as a tool to plan out your crops ingame, and as a way to showcase my ability as a fullstack developer. If by any chance you are interested on hire me as a Junior fullstack Developer, my <a href="https://www.linkedin.com/in/rodrigo-portugal/">Linkedin</a></p>
      <h3>Credits:</h3>
      <p></p>
      <ul>
        <li>Stardew Valley by <b>ConcernedApe</b>, your game is awesome and have given me lots of fun hours</li>
        <li>Tools used: <b>Visual Studio Code</b>, <b>PgAdmin</b>, <b>Postman</b>, lots of tutorials and even more StackOverflow questions</li>
        <li>All the crops and information needed were from the <b>Stardew Valley Wiki</b></li>
        <li>For taking my almost daily spam about every little change and progress, and push me to have a working version and publish it, <a href="https://twitter.com/AgLeon4"><b>@AgLeon4</b></a></li>
        <li>All the background image, UI elements and crops images were taken from the <a href="https://store.steampowered.com/app/413150/Stardew_Valley/"><b>Stardew Valley game by ConcernedApe</b></a></li>
      </ul>
    </div>
  );
}

function Me() {
  return (
    <div className="calendar navegationListContent">
      <h2>About Me</h2>
      <img alt="my face"></img>
      <p>Hi, I'm Rodrigo Portugal and I built and maintain this application.
        To contact me :
      </p>
      <ul>
        <li><b>GitHub:</b><a href="https://github.com/Bleiben1/stardew-crop-calendar"><b>@GitHub</b></a></li>
        <li><b>Email: </b><a href = "mailto: rodrigoportugaldutra@gmail.com"><b>rodrigoportugaldutra@gmail.com</b></a></li>
      </ul>
    </div>
  );
}
