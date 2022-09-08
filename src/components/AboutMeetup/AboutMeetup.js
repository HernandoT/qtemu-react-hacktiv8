import React, { Component } from "react";
import "./AboutMeetup.css";
import Heading from "../Heading/Heading";

export default class AboutMeetup extends Component {
  render() {
    return (
      <div>
        <Heading text={'About Meetup'}/>
        <p className="about">
          Come and meet other developers interested in the JavaScript and it's
          library in the Greater Jakarta area <br />
          <br />
          Twitter: @JakartaJS and we use the hashtag #jakartajs
        </p>
      </div>
    );
  }
}
