import React, { Component } from "react";
import styled from "styled-components";

export default class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container p-5">
					<div className="row justify-content-center">
						<Social className="contact-form">
							<li className="contact-form-li">
								<a
									href="https://www.instagram.com/katcha.fun/"
									role="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-instagram"></i>
								</a>
							</li>
							<li className="contact-form-li">
								<a
									href="https://www.facebook.com/katcha.fun/"
									role="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-facebook-square"></i>
								</a>
							</li>
							<li className="contact-form-li">
								<a
									href="mailto:howdy@katcha.fun"
									role="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fas fa-envelope-open-text"></i>
								</a>
							</li>
							<li className="contact-form-li">
								<a
									href="https://twitter.com/katcha_fun"
									role="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-twitter"></i>
								</a>
							</li>
							<li className="contact-form-li">
								<a
									href="https://www.etsy.com/shop/KatchaFun"
									role="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-etsy"></i>
								</a>
							</li>
						</Social>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const Social = styled.div`
	i {
		font-size: 3rem;
	}

	.fa-instagram {
		color: #8bba53;
	}
	.fa-facebook-square {
		color: #ad99c9;
	}
	.fa-envelope-open-text {
		color: #4bbae8;
	}
	.fa-twitter {
		color: #e13f46;
	}
	.fa-etsy {
		color: #f3cf3e;
	}
`;
