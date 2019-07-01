import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			component: () => <Home />,
			homeActive: true,
			aboutActive: false,
			workActive: false,
			contactActive: false,
			displayMenu: null
		};
		this.animations = this.animations.bind(this);
	}

	animations(e) {
		console.log(e.target.textContent);
		if (e.target.textContent === "{Home}") {
			this.setState({
				component: () => <Home />,
				homeActive: true,
				aboutActive: false,
				workActive: false,
				contactActive: false
			});
		}
		if (e.target.textContent === "{About Me}") {
			this.setState({
				component: () => <About />,
				homeActive: false,
				aboutActive: true,
				workActive: false,
				contactActive: false
			});
		}
		if (e.target.textContent === "{Work}") {
			this.getUserData(e.target.textContent);
		}
		if (e.target.textContent === "{Contact me}") {
			this.setState({
				component: () => <Contact />,
				homeActive: false,
				aboutActive: false,
				workActive: false,
				contactActive: true
			});
		}
		const menuButton = document.querySelector(".menu-btn");
		const menu = document.querySelector(".menu");
		const menuNav = document.querySelector(".menu-nav");
		const menuBranding = document.querySelector(
			".menu-branding"
		);
		const navNodelist = document.querySelectorAll(
			".menu-item"
		);
		const links = document.querySelectorAll(".nav-link");
		// Menu -- initial state

		this.setState({
			displayMenu: false
		});

		if (!this.state.displayMenu) {
			menuButton.classList.add("close");
			menu.classList.add("display");
			menuNav.classList.add("display");
			menuBranding.classList.add("display");
			navNodelist.forEach(item => {
				item.classList.add("display");
			});
			links.forEach(link => {
				link.onmouseover = () =>
					(link.textContent = `{${link.textContent}}`);
				link.onmouseout = () => {
					link.textContent = link.textContent.slice(1, -1);
				};
			});

			this.setState({
				displayMenu: true
			});
		} else {
			menuButton.classList.remove("close");
			menu.classList.remove("display");
			menuNav.classList.remove("display");
			menuBranding.classList.remove("display");
			navNodelist.forEach(item =>
				item.classList.remove("display")
			);

			this.setState({
				displayMenu: false
			});
		}
	}

	getUserData(e) {
		this.setState({
			component: () => <Portfolio />,
			homeActive: false,
			aboutActive: false,
			workActive: true,
			contactActive: false
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="layer">
					<Nav
						animations={this.animations}
						state={this.state}
					/>
					{this.state.component()}
				</div>
			</React.Fragment>
		);
	}
}

export default App;
