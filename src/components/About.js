import React, { Component } from "react";
import { Link } from "react-router-dom";
import selfPotrait from "../img/ABOUTME2.png";
import selfPotrait2 from "../img/ABOUTME1.png";
import about from "../img/ABOUT ME HEADER.png";
import Contact from "./Contact";
import styled from "styled-components";
import { device } from "./Device";
export default class About extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="text-center pt-5">
					<img src={about} style={{ width: "250px" }} alt="pcc_logo" />
					<Grid className="grid">
						<div className="grid-left">
							<img src={selfPotrait} alt="Tick Tock" />
						</div>
						<div className="text-center lead p-5 grid-center">
							<p>
								Curator of colour, snail mail reviver, nature lover, happy
								atheist, and kids’ comics advocate.
							</p>

							<p>
								I'm Kathleen and technically speaking, I have never studied art,
								but have scribbled and doodled my way along the years and ended
								up here. I create postcards, art prints, kids activities and my
								most beloved feat, kids comics!
							</p>

							<p>
								After working on illustration and graphic design with many
								different sorts of clients in the past, I finally enlisted my
								pencil to work for me!
							</p>

							<p>
								I self publish my own comics, online and in print and am always
								trying to think up new fun ways to get kids reading, writing and
								drawing.
							</p>

							<p>
								I live a very quiet life in the Black Forest, Germany, with my
								partner and two sons.
							</p>
						</div>
						<div className="grid-right">
							<img src={selfPotrait2} alt="Snail" />
						</div>
					</Grid>
					<Contact />
				</div>
			</React.Fragment>
		);
	}
}

const Grid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	justify-content: center;
	grid-column-gap: 1rem;

	img {
		padding: 1rem;
		max-width: 320px;
	}

	.grid-left,
	.grid-right {
		grid-column: auto / span 2;
	}
	.grid-center {
		grid-column: auto / span 3;
	}

	@media ${device.laptop} {
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
			justify-content: center;
			grid-column-gap: 0.5rem;
		}
		.grid-left,
		.grid-right {
			grid-column: auto / span 1;
		}
		.grid-center {
			grid-column: auto / span 2;
		}
		img {
			padding: 1rem;
			max-width: 100%;
		}
	}
`;
