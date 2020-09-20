import React, { Component } from "react";
import Title from "./Title";
import fbLogo from "../img/FBbuttonred.png";
import twitLogo from "../img/twitterbuttonred.png";
import instaLogo from "../img/Instabuttonred.png";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center pt-5">
              <Title name="Send me" title="an Email"></Title>
              <div className="form-group row">
                <form
                  action="contactform.php"
                  method="post"
                  className="mx-auto"
                >
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    id="exampleInputEmail1"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    name="mail"
                    className="form-control mb-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted mb-2">
                    I'll never share your email with anyone else.
                  </small>

                  <input
                    type="text"
                    name="subject"
                    className="form-control mb-2"
                    id="exampleInputEmail1"
                    placeholder="Subject"
                  />

                  <textarea
                    className="form-control mb-2"
                    id="exampleTextarea"
                    rows="3"
                    name="message"
                    placeholder="Ask me anything!"
                  ></textarea>

                  <input
                    type="submit"
                    className="btn btn-black"
                    value="Submit"
                  />
                  <hr className="my-4" />
                  <h2>Or catch me on social media:</h2>
                  <ul className="contact-form">
                    <li className="contact-form-li">
                      <a
                        href="https://www.facebook.com/katcha.fun/"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="none"
                          src={fbLogo}
                          style={{ height: "70px" }}
                          alt="fb_logo"
                        />
                      </a>
                    </li>
                    <li className="contact-form-li">
                      <a
                        href="https://twitter.com/katcha_fun"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="none"
                          src={twitLogo}
                          style={{ height: "70px" }}
                          alt="twit_logo"
                        />
                      </a>
                    </li>
                    <li className="contact-form-li">
                      <a
                        href="https://www.instagram.com/katcha.fun/"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="none"
                          src={instaLogo}
                          style={{ height: "70px" }}
                          alt="insta_logo"
                        />
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="form-group row">
              <form
                action="https://fun.us12.list-manage.com/subscribe/post?u=507dd83fc34ba89ac3b16b9a9&amp;id=ffd92e51c4"
                className="mx-auto"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate
              >
                <div className="mx-auto d-inline-block">
                  <h2>Subscribe to Katcha Recommends.</h2>
                  <div className="form-text text-muted">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <input
                    type="text"
                    name="FNAME"
                    className="form-control"
                    id="mce-FNAME"
                    placeholder=" * Full Name"
                  />

                  <input
                    type="email"
                    name="EMAIL"
                    className="form-control"
                    id="mce-EMAIL"
                    aria-describedby="emailHelp"
                    placeholder=" * Enter email"
                  />
                  <div className="mc-field-group size1of2">
                    <div
                      className="mergeRow dojoDndItem mergeRow-birthday"
                      id="mergeRow-3"
                    >
                      <div className="field-group">
                        <div className="birthdayfield subfields borderbox">
                          <span className="subfield dayfield">
                            <label for="MERGE3-day">Birthday</label>
                            <input
                              type="text"
                              pattern="[0-9]*"
                              id="MERGE3-day"
                              name="MERGE3[day]"
                              maxlength="2"
                              size="2"
                              value=""
                              placeholder="DD"
                            />
                          </span>{" "}
                          /{" "}
                          <span className="subfield monthfield">
                            <label for="MERGE3-month">Month</label>
                            <input
                              type="text"
                              pattern="[0-9]*"
                              id="MERGE3-month"
                              name="MERGE3[month]"
                              maxlength="2"
                              size="2"
                              value=""
                              placeholder="MM"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
                <div
                  id="mergeRow-gdpr"
                  className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div className="content__gdpr">
                    <label>Marketing Permissions</label>
                    <p>
                      Katcha will use the information you provide on this form
                      to be in touch with you and to provide updates and
                      marketing. Please let me know all the ways you would like
                      to hear from me:
                    </p>
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label className="checkbox subfield" for="gdpr_22457">
                        <input
                          type="checkbox"
                          id="gdpr_22457"
                          name="gdpr[22457]"
                          value="Y"
                          className="av-checkbox"
                        />
                        &nbsp;<span>Email</span> &nbsp;
                      </label>
                      <label className="checkbox subfield" for="gdpr_22461">
                        <input
                          type="checkbox"
                          id="gdpr_22461"
                          name="gdpr[22461]"
                          value="Y"
                          className="av-checkbox"
                        />
                        &nbsp;<span>Direct Mail</span> &nbsp;
                      </label>
                      <label className="checkbox subfield" for="gdpr_22465">
                        <input
                          type="checkbox"
                          id="gdpr_22465"
                          name="gdpr[22465]"
                          value="Y"
                          className="av-checkbox"
                        />
                        &nbsp;<span>Customized online advertising</span> &nbsp;
                      </label>
                    </fieldset>
                    <p>
                      You can change your mind at any time by clicking the
                      unsubscribe link in the footer of any email you receive
                      from me, or by contacting me at howdy@katcha.fun. I will
                      treat your information with respect. For more information
                      about my privacy practices please visit my website. By
                      clicking below, you agree that I may process your
                      information in accordance with these terms.
                    </p>
                  </div>
                  <div className="content__gdprLegal">
                    <p>
                      I use Mailchimp as my marketing platform. By clicking
                      below to subscribe, you acknowledge that your information
                      will be transferred to Mailchimp for processing.{" "}
                      <a
                        href="https://mailchimp.com/legal/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more about Mailchimp's privacy practices here.
                      </a>
                    </p>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    className="d-none"
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    className="d-none"
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_507dd83fc34ba89ac3b16b9a9_ffd92e51c4"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn btn-black"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}