import React from "react";
import Title from "./Title";
export default function Privacy() {
	return (
		<React.Fragment>
			<div className="container pt-5 pb-5">
				<div className="row">
					<div className="col-10 mx-auto pt-5">
						<Title name="Imprint" title=""></Title>
						<div className="wrap">
							<div>
								<p className="font-weight-bold">
									Responsible for the content of these pages
								</p>
								<ul className="list-unstyled font-italic font-weight-light text-muted">
									<li>katcha.fun</li>
									<li>Kathleen Chagall</li>
									<li>
										<a
											style={{ color: "#6c757d" }}
											href="mailto:howdy@katcha.fun"
										>
											howdy@katcha.fun
										</a>
									</li>
									<li>
										<a
											style={{ color: "#6c757d" }}
											href="http:\\www.katcha.fun"
										>
											www.katcha.fun
										</a>
									</li>
								</ul>
								<p className="font-weight-bold">
									Conception, creation & realisation
								</p>
								<ul className="list-unstyled font-italic font-weight-light text-muted">
									<li>savange handcrafted</li>
								</ul>
								<p className="font-weight-bold">Notice of liability</p>
								<ul className="list-unstyled font-italic font-weight-light text-muted">
									<li>
										In spite of careful control of contents, I am not liable for
										the contents of external links.
									</li>
									<li>
										The operators of linked pages are solely responsible for
										their contents.
									</li>
								</ul>
								<p className="text-muted">
									The european commission provides a platform for online dispute
									resolution (OS) which is accessible at{" "}
									<a
										style={{ color: "#6c757d" }}
										href="https:\\www.ec.europa.eu/consumers/odr"
									>
										www.ec.europa.eu/consumers/odr
									</a>
									. I am not obliged nor willing to participate in dispute
									settlement proceedings before a consumer arbitration board.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
