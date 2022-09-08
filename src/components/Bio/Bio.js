import React, { Component } from "react";
import "./Bio.css";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

export default class Bio extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Jakarta',
      members: '1,078',
      organizers: 'Adhy Wiranata'
    }
  }

  render() {
    return (
      <div className="bio">
        <Image img={'bio-img'}/>
        <div className="content">
          <Heading text={'Hacktiv8 Meetup'} class={'no-margin'}/>
          <div className="data-row">
            <p className="head">Location</p>
            <p>{this.state.location}</p>
          </div>
          <div className="data-row">
            <p className="head">Members</p>
            <p>{this.state.members}</p>
          </div>
          <div className="data-row">
            <p className="head">Organizers</p>
            <p>{this.state.organizers}</p>
          </div>
          <Button btnStyle={"btnJoinUs"} btnText={"Join Us"} />
        </div>
      </div>
    );
  }
}
