import React, { Component } from 'react'
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import getUserData from './githubapi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: null
    }
    this.animations = this.animations.bind(this);
  }

  animations () {
    const menuButton = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navNodelist = document.querySelectorAll('.menu-item');
    const links = document.querySelectorAll('.nav-link');
// Menu -- initial state

this.setState({displayMenu: false});

  if (!this.state.displayMenu) {
    menuButton.classList.add('close');
    menu.classList.add('display');
    menuNav.classList.add('display');
    menuBranding.classList.add('display');
    navNodelist.forEach(item => {
      item.classList.add('display');
  });
    links.forEach(link => {
      link.onmouseover = () => link.textContent = `{${link.textContent}}`;
      link.onmouseout = () => {
        link.textContent = link.textContent.slice(1, -1);
      };
    });

    this.setState({displayMenu: true});
  } else {
    menuButton.classList.remove('close');
    menu.classList.remove('display');
    menuNav.classList.remove('display');
    menuBranding.classList.remove('display');
    navNodelist.forEach(item => item.classList.remove('display'));

    this.setState({displayMenu: false});
  }

  }

  async getUserData () {
    console.log(await getUserData());  
  }

  componentDidMount () {
    this.getUserData();
  }

  render () {
    return (
      <Router>
        <React.Fragment>
          <Nav animations={this.animations}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Redirect to='/'/>
          </Switch>
      </React.Fragment>
      </Router>
      
      
    );
  }
}

export default App;
