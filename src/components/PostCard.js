import React, { Component } from "react";
import PostCardClub from "../img/PostcardClub.gif";

export default class PostCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container p-5">
          <div className="row">
            <div className="col-10 mx-auto text-center pt-5">
              <img src={PostCardClub} style={{ width: "30%" }} alt="pcc_logo" />
              <div className="text-left">
                <p>
                  The @katcha.fun Postcard Club is a venture of mine to
                  encourage others to take some time out of their hectic
                  lifestyles to write to the nearest and dearest in their lives!
                </p>

                <p>
                  {" "}
                  In particular, I would love the club to be a resource for
                  parents to encourage their children to write postcards to
                  family and friends they perhaps don’t see as much as they
                  should or would if they could.
                </p>

                <p>
                  Every quarter I ship out three brand new postcards to the
                  club’s members, and they are encouraged to use them to contact
                  friends, family members, old teachers, colleagues, colleagues
                  they work with over the internet but have never actually met.
                </p>

                <p>
                  {" "}
                  If you are a parent, you could use the club as an opportunity
                  to encourage your children to reach out to other countries,
                  towns or cities. Find a school on Google and send your
                  postcards there, or an old people’s home in a far off land and
                  request to open a communication between the generations!
                </p>

                <p>
                  You can join the club{" "}
                  <a
                    href="http://kck.st/2ZHbOOs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HERE
                  </a>{" "}
                  on Kickstarter for a special price and a limited time!
                </p>

                <p>
                  If you sign up to my Postcard Club newsletter, you will
                  receive a printable PDF guide that helps you or your kids with
                  letter writing ideas, as well as regular updates on the
                  project! Follow{" "}
                  <a
                    href="http://eepurl.com/dNFw5E"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    THIS
                  </a>{" "}
                  link to sign up!
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
