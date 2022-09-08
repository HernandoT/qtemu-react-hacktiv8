import React, { Component } from "react";
import "./Members.css";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

export default class Members extends Component {
  render() {
    return (
      <div className="members">
        <div className="flex">
        <Heading text={'Members'} />
          <button className="seeAll">See all</button>
        </div>
        <div className="container">
          <Image img={'member-img'}/>
          <div className="content">
            <p>Organizers</p>
            <div className="data-row">
              <p className="head">Adhy Wiranata</p>
              <p>4 others</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
