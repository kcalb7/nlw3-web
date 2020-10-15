import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-map.css";

const OrphanagesMap = () => (
	<div id="page-map">
		<aside>
			<header>
				<img src={mapMarkerImg} alt="Map marker" />
				<h2>Escolha um orfanato no mapa</h2>
				<p>Muitas crianças estão esperando a sua visita :)</p>
			</header>

			<footer>
				<strong>São Sebastião do Paraíso</strong>
				<span>Minas Gerais</span>
			</footer>
		</aside>

		<Map
			center={[-20.9096949, -46.9963349]}
			style={{ width: "100%", height: "100%" }}
			zoom={15}
		>
			<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		</Map>

		<Link to="" className="create-orphanage">
			<FiPlus size={32} color="#fff" />
		</Link>
	</div>
);

export default OrphanagesMap;
