import React, { Component } from "react";
import PostCardClub from "../img/PostCardClub/PostcardClub.gif";
import Snail from "../img/PostCardClub/PCCLUBIMAGE1.png";
import Bloom from "../img/PostCardClub/PCCLUBIMAGE2.png";
import Tick from "../img/PostCardClub/PCCLUBIMAGE3.png";
import Rain from "../img/PostCardClub/PCCLUBIMAGE4.png";
import styled from "styled-components";
import { device } from "./Device";

export default class PostCard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="text-center pt-5">
					<img src={PostCardClub} style={{ width: "250px" }} alt="pcc_logo" />
					<Grid className="grid">
						<div className="grid-left">
							<img src={Tick} alt="Tick Tock" />
							<img src={Bloom} alt="Bloomin'" />
						</div>
						<div className="text-center lead p-5 grid-center">
							<p>
								Since the beginning of 2019, I have been sending postcards
								monthly across the globe through my Postcard Club. Sometimes the
								most wonderful thing in the world can be to receive a letter
								unexpectedly; the Postcard Club helps its members remember to do
								that for someone.
							</p>

							<p>
								Each month or quarter the club prompts its members to reach out
								to friends, family and strangers and provides them with fun
								colourful cards to do so. Also, the club helps to keep snail
								mail alive and the long-held human tradition of sending
								postcards.
							</p>

							<p>
								In the past packs have also occasionally included writing
								prompts, colouring in booklets and stickers. The cards are
								bright, colourful and happy reminders of all the little wondrous
								things the world has to offer. They help the very young connect
								with letter writing and bring rays of sunshine to the lives of
								the very old!
							</p>

							<p>
								Due to the pandemic, the club went on hiatus but hopefully will
								return once the world gets back to normal.
							</p>

							<p>
								You can still buy previous postcard sets in the shop. Or you can
								follow me on Kickstarter for any updates.
							</p>
						</div>
						<div className="grid-right">
							<img src={Snail} alt="Snail" />
							<img src={Rain} alt="Love Rain" />
						</div>
					</Grid>
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
