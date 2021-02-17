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
            <Link to="/rights">Legal</Link>
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
          <Route path="/rights">
            <Rights />
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

function Rights() {
  return (
    <div className="calendar navegationListContent">
      <h2>Terms of Use</h2>
      <p>Last update time : February 17, 2021
      </p>
      <p>The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, these “Terms of Use”) 
        govern your use of our websites, including its subdomains (collectively, the “Websites”), and other online services we may provide 
        (collectively, with the Websites, the “Services”).
        By using the Services, including by using the Websites, you agree to be bound by these {/*Terms and the Privacy Policy (the “Privacy Policy”) that 
        is incorporated by reference into these*/} Terms of Use. If you don’t agree to be bound by these Terms of Use, do not use the Services.
      </p>
      <h3>Changes in the Terms of Use</h3>
      <p>
      We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when
       we post them. If you continue to use our Services, including the Websites, following the posting of revised Terms of Use, you 
       are signifying that you accept and agree to the changes. You are expected to check this page from time to time, so you are aware 
       of any changes.
      </p>
      <h3>Changes to Websites; Unavailability of Websites</h3>
      <p>
      We reserve the right to withdraw or amend the Websites in our sole discretion without notice. Note that the Websites and their 
      content are not necessarily always complete or up-to-date, and we are under no obligation to update them. We will not be liable 
      if for any reason all or any part of the Websites is unavailable at any time or for any period.
      </p>
      <h3>Trademarks</h3>
      <p>
      Any of the trademarks, service marks, collective marks, design rights, personality rights, or similar rights that are mentioned, 
      used, or cited on this website are the property of their respective owners. Their use here does not imply that you may use them 
      for any other purpose other than for the same or a similar informational use as contemplated by the original authors of this website. 
      It should be understood that Stardew Valley content and materials are trademarks and copyrights of Stardew Valley or its licensors. 
      All rights reserved. 
      </p>
      <h3>Prohibited Uses</h3>
      <p>
      You may use the Services, including the Websites, only for lawful purposes and in accordance with these Terms of Use. You agree not 
      to use the Services, including the Websites, in any way that violates applicable laws, in order to exploit or harm anyone, to send 
      advertising or promotional material, or to impersonate or attempt to impersonate the Company or anyone else.
      Additionally, you agree not to:
      </p>
      <ul>
        <li>Disable, overburden, damage, or impair (or attempt to disable, overburden, damage, or impair) the Services, including the Websites, 
          or interfere with any other party’s use of the Services, including the Websites.</li>
        <li>Engage in any other conduct that affects anyone else’s use or enjoyment of the Services, including the Websites, or that, as determined 
          by us, may harm the Company.</li>
        <li>Use any robot, spider, or other automatic device, process, or means to access the Websites for any purpose, including monitoring or copying 
          any of the material on the Websites.</li>
        <li>Use any manual process to monitor or copy any of the material on the Websites or for any other unauthorized purpose without our prior 
          written consent.</li>
        <li>Use any device, software, or routine that interferes with the proper working of the Websites.</li>
        <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
        <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, including the Websites, 
          the server on which the Websites are stored, or any server, computer, or database connected to the Websites.</li>
        <li>Attack the Websites via a denial-of-service attack or a distributed denial-of-service attack.</li>
        <li>Otherwise attempt to interfere with the proper working of the Services, including the Websites.</li>
      </ul>
      <h3>Reliance on information Posted</h3>
      <p>
      The information presented on or through the Websites is made available solely for general information purposes. We do not warrant the 
      accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. 
      We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the 
      Websites, or by anyone who may be informed of any of its contents.
      </p>
      <h3>Linking to the Website and Social Media Features</h3>
      <p>You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage 
        of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part.</p>
      <h3>Links from the Websites</h3>
      <p>If the Websites contain links to other sites and resources provided by third parties, these links are provided for your convenience 
        only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or 
        damage that may arise from your use of them.</p>
      <h3>Disclaimer of Warranties</h3>
      <p>YOUR USE OF THE SERVICES, INCLUDING THE WEBSITES AND THEIR CONTENT, IS AT YOUR OWN RISK. THE SERVICES, INCLUDING THE WEBSITES AND 
        THEIR CONTENT, ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
        NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, 
        SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES, INCLUDING THE WEBSITES. WITHOUT LIMITING THE FOREGOING, 
        NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES AND WEBSITES OR THEIR CONTENT 
        WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES 
        IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITES OR SERVICES WILL OTHERWISE MEET YOUR NEEDS OR 
        EXPECTATIONS.</p>
      <p>
      TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, 
      OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
      </p>
      <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
      <h3>Limitation on Liability</h3>
      <p>
      TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, 
      AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, 
      OR INABILITY TO USE, THE SERVICES, INCLUDING THE WEBSITES, ANY WEBSITES LINKED TO THE WEBSITES, ANY CONTENT ON THE WEBSITES OR SUCH OTHER 
      WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL 
      INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, 
      LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
      </p>
      <p>THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
    </div>
  );
}