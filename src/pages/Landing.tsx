import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "../styles/pages/landing.css";

import logoimg from "../images/logo.svg";

class Landing extends Component {
	render() {
		return (
			<div id="page-landing">
				<div className="content-wrapper">
					<img src={logoimg} alt="Happy" />
					<main>
						<h1>Leve felicidade para o mundo</h1>
						<p>Visite orfanatos e mude o dia de muitas crianças.</p>
					</main>
					<div className="location">
						<strong>São Sebastião do Paraíso</strong>
						<span>Minas Gerais</span>
					</div>

					<Link to="/map" className="enter-app">
						<FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
					</Link>
				</div>
			</div>
		);
	}
}

export default Landing;
