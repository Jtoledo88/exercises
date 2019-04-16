import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import { Footer } from "./footer.jsx";
import { Card } from "./card.jsx";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="landing">
				<Navbar />
				<Jumbotron />
				<Card />
				<Footer />
			</div>
		);
	}
}
