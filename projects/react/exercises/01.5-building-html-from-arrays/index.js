import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
	<li key={0} className="nav-item">
		<a className="nav-link" href="#">
			Link to google.com
		</a>
	</li>,
	<li key={1} className="nav-item">
		<a className="nav-link" href="#">
			Link to facebook.com
		</a>
	</li>,
	<li key={2} className="nav-item">
		<a className="nav-link" href="#">
			Link to amazon.com
		</a>
	</li>
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
