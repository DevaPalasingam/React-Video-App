import React from "react";
import { shape, string } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const Wrapper = styled.(Link)`
// 	width: 32%;
// 	border: 2px solid #333;
// 	border-radius: 4px;
// 	margin-bottom: 25px;
// 	padding-right: 10px;
// 	overflow: hidden;
// 	color: black;
// 	text-decoration: none;
// `;

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`;
// change img to Image
// Replace show-card div to Wrapper

const ShowCard = props => (
		<div className="show-card">
			<Image
				alt={`${props.show.title} Show Poster`}
				src={`./img/posters/${props.show.poster}`}
			/>
			<div>
				<h3>{props.show.title}</h3>
				<h4>({props.show.year})</h4>
				<p>{props.show.description}</p>
			</div>
		</div>
);

ShowCard.propTypes = {
	show: shape({
		poster: string.isRequired,
		title: string.isRequired,
		year: string.isRequired,
		description: string.isRequired
	}).isRequired
};

export default ShowCard;
