import React, { useState } from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import comic from "../img/Comics/COMICHEADER.png";
import styled from "styled-components";
import comicLeftENG from "../img/Comics/THEUGLIESTCOMICPHOTO.png";
import comicRightGER from "../img/Comics/DASHAESSLICHSTECOMICPHOTO.png";
import comicRightENG from "../img/Comics/NAKEDMOLERATPANELCOMICPAGE.png";
import sampleENG from "../img/Comics/THEUGLIESTSAMPLEPAGE.png";
import moleRat from "../img/Comics/MOLERAT.png";
import { device } from "./Device";

export default function Comics() {
	const [comicDisplay, setComicDisplay] = useState(false);
	// const [comicRight, setComicRight] = useState(false);

	return (
		<React.Fragment>
			<ComicContainer className="container-comics">
				<div className="text-center pt-5">
					<img
						className="pt-5 pb-3"
						src={comic}
						style={{ width: "250px" }}
						alt="comic_logo"
					/>
				</div>
				<div className="titles" onClick={() => setComicDisplay(!comicDisplay)}>
					<h1 id="ugly" className="comics-h2">
						The Ugliest
					</h1>
					<span>*</span>
					<h1 id="haesslich" className="comics-h2">
						Das Hässlichste
					</h1>
				</div>
				<div className={comicDisplay ? "none" : "wrapper-left"}>
					<div className="content-left">
						<img className="hero" src={comicLeftENG} alt="" />
					</div>
					<div className="content-text-right">
						<p>
							In 2020 I started the year off with so much hope and optimism and
							my very first comic idea! A comic to engage and educate children
							about the world around us and our emotional health! I got to work
							straight away, however, by April the project was stalled by the
							unavoidable pandemic. I suddenly became a rather reluctant German
							teacher to my own children.
						</p>
						<p>
							Despite this, I decided to persevere with the project and rather
							than kicking it to the side, I launched a Kickstarter and funded
							it to push me to spend every spare moment I had working on it.
						</p>
					</div>
					<div className="content-text-left">
						<p>
							So I could continue the comic whilst homeschooling my sons, I
							decided to create the comic in pencil and watercolour instead of
							working digitally, as I normally would. In doing so, the comic
							took on an aesthetic of its own and it really helped me hone my
							traditional art skills.
						</p>
						<p>
							The comic follows a naked mole rat through the desert in North
							East Africa for a day. Taking a funny, implausible look at the
							natural world whilst doling out factual snippets about the naked
							mole rat, it also engages the reader in a discussion about
							empathy, resilience and finding a path toward self acceptance.
						</p>
					</div>
					<div className="content content-right">
						<img src={comicRightENG} alt="" />
					</div>
					<div className="content-center">
						<img src={sampleENG} alt="" />
					</div>

					<div className="text-center">
						<p>You can purchase a physical or PDF copy from my shop, here. </p>
						<ProductConsumer>
							{(value) => (
								<Link to="/details">
									<ButtonContainer
										onClick={() => {
											value.handleDetail(52);
										}}
									>
										Go to Shop
									</ButtonContainer>
								</Link>
							)}
						</ProductConsumer>
						<div className="mole-center">
							<img src={moleRat} alt="" />
						</div>
					</div>
				</div>
				<div className={comicDisplay ? "wrapper-right" : "none"}>
					<div className="content-text-left">
						<p>
							Das Jahr 2020 habe ich mit so viel Hoffnung, Optimismus und meiner
							ersten Comicidee begonnen. Ein Comic um Kinder über die Welt um
							uns herum und unsere emotionale Gesundheit aufzuklären! Ich habe
							postwendenden damit angefangen, doch ab April geriet das Projekt
							ins Stocken auf Grund der unvermeidlichen Pandemie wodurch ich ein
							eher widerstrebender Deutschlehrer für meine eigenen Kinder wurde.
						</p>
						<p>
							Trotz allem entschloss ich mich mit dem Projekt durchzuhalten,
							anstatt meine Idee zu verwerfen. Ich startete ein Kickstarter, um
							den Comic zu finanzieren, um mich zu motivieren und verbrachte
							jede freie Minute damit an meinem Comic zu arbeiten.
						</p>
					</div>
					<div className="content-right">
						<img className="hero" src={comicRightGER} alt="" />
					</div>
					<div className="content content-left">
						<img src={comicRightENG} alt="" />
					</div>
					<div className="content-text-right">
						<p>
							Damit ich den Comic, während ich meine Söhne zu Hause
							unterrichtete, fortsetzen konnte beschloss ich, den Comic mit
							Bleistift und Aquarell zu erstellen, anstatt wie gewohnt digital
							zu arbeiten. Auf diese Weise nahm der Comic eine eigene Ästhetik
							an und half mir wirklich, meine traditionellen Kunstfertigkeiten
							zu verbessern.
						</p>
						<p>
							Der Comic verfolgt ein Nacktmull einen Tag lang durch die Wüsten
							Nordostafrikas. Ein lustiger, unplausibler Blick auf die
							natürliche Welt, während sachliche Schnipsel über die Nacktmulle
							illustriert werden, leitet der Comic den Leser auch in eine
							Diskussion über Empathie, Belastbarkeit und das Finden eines Weges
							zur Selbstakzeptanz.
						</p>
					</div>
					<div className="text-center">
						<p>
							Eine digitale oder gedruckte Version könnt ihr in meinem Shop
							kaufen.
						</p>
						<ProductConsumer>
							{(value) => (
								<Link to="/details">
									<ButtonContainer
										onClick={() => {
											value.handleDetail(53);
										}}
									>
										Go to Shop
									</ButtonContainer>
								</Link>
							)}
						</ProductConsumer>
						<div className="mole-center">
							<img className="moleLeft" src={moleRat} alt="" />
						</div>
					</div>
					<div className="content-center">
						<img src={sampleENG} alt="" />
					</div>
				</div>
			</ComicContainer>
		</React.Fragment>
	);
}

const ComicContainer = styled.div`
	overflow-x: hidden;
	padding-bottom: 5rem;

	.hero {
		width: 800px;
	}
	.moleLeft {
		transform: rotateY(180deg);
	}

	.titles h1:hover {
		color: #eb6864;
		cursor: pointer;

		span {
			color: #000000;
			transform: rotate(4deg);
		}
	}
	.titles p {
		padding: 0;
		margin: 0;
	}

	.wrapper-left,
	.wrapper-right {
		display: grid;
		width: 100vw;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		grid-gap: 2rem;
		justify-content: center;
		align-items: start;
		transition: all 0.5s ease-in-out;
	}

	.none {
		display: none;
	}

	.wrapper-left .content-left {
		grid-column: auto / span 4;
	}
	.wrapper-right .content-left {
		grid-column: auto / span 3;
		padding-left: 5rem;
	}

	.wrapper-left .content-center {
		grid-column: auto / span 3;
		grid-column-start: 2;
	}
	.wrapper-right .content-center {
		grid-column: auto / span 3;
		grid-column-start: 5;
	}

	.wrapper-left .content-right {
		grid-column: auto / span 3;
		grid-column-start: 5;
	}
	.wrapper-right .content-right {
		grid-column: auto / span 4;
		grid-column-start: 4;
		text-align: end;
	}

	.wrapper-left .content-text-left {
		float: right;
		padding-right: 1rem;
		grid-column: auto / span 2;
		grid-column-start: 2;
		padding: 5rem 0;
	}
	.wrapper-right .content-text-left {
		float: right;
		padding-right: 1rem;
		grid-column: auto / span 2;
		grid-column-start: 2;
		padding: 5rem 0;
	}

	.wrapper-left .content-text-right {
		margin: 3rem 0 1.5rem 0;
		grid-column: auto / span 2;
		padding: 5rem 2rem 0 0;
	}
	.wrapper-right .content-text-right {
		margin: 3rem 0 1.5rem 0;
		grid-column: auto / span 2;
		grid-column-start: 5;
		padding: 5rem 2rem 0 0;
	}

	.titles {
		text-align: center;
		justify-content: center;
		align-items: center;
		margin-bottom: 3rem;
		transition: all 0.2s ease-in-out;
	}
	.titles h1 {
		display: inline-block;
	}

	.wrapper-right .text-center {
		padding: 2rem 0;
		grid-column: auto / span 2;
		grid-column-start: 2;
	}

	.wrapper-left .text-center {
		padding: 2rem 0;
		grid-column: auto / span 2;
		grid-column-start: 5;
	}

	span {
		padding: 0 0.5rem;
		transition: all 0.2s ease-in-out;
	}

	p {
		font-size: 1.3rem;
		line-height: 1.8rem;
		margin: 1.5rem;
		text-align: center;
	}

	span {
		color: #eb6864;
		font-size: 2rem;
	}

	.mole-center {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 0 3rem 0;
		img {
			width: 300px;
		}
	}

	@media ${device.laptop} {
		.wrapper-left,
		.wrapper-right {
			display: block;
			grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
			justify-content: center;
			align-items: center;
			grid-gap: 0.5rem;
		}

		.wrapper-left .content-left,
		.wrapper-left .content-center,
		.wrapper-left .content-right,
		.wrapper-left .content-text-left,
		.wrapper-left .content-text-right,
		.wrapper-right .content-left,
		.wrapper-right .content-center,
		.wrapper-right .content-right,
		.wrapper-right .content-text-left,
		.wrapper-right .content-text-right {
			grid-column: auto / span 1;
		}

		.wrapper-left .content-text-right,
		.wrapper-left .content-left,
		.wrapper-right .content-text-right,
		.wrapper-right .content-left {
			padding: initial;
		}
		.hero {
			padding: initial !important;
		}
		img {
			padding: 1rem;
			max-width: 100%;
		}
		p {
			text-align: initial;
		}
		.titles h1 {
			display: inline-block;
			font-size: 1.6rem;
		}
	}
`;
