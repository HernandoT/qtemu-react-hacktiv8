import React, { Component } from "react";
import "./NextMeetup.css";
import Heading from "../Heading/Heading";

export default class NextMeetup extends Component {
  render() {
    return (
      <div>
        <Heading text={"Next Meetup"} />
        <div className="container">
          <p>Awesome meetup and event</p>
          <p className="date">25 January 2019</p>
          <p>
            Hello, JavaSript &amp; Node.js Ninjas! <br />
            Get ready for our monthly meetup JakartaJS! This will be our fifth
            meetup of 2018! <br />
            The meetup format will contain some short stories and technical
            talks. <br />
            If you have a short announcement you'd like to share with the
            audience, you may do so during open mic announcements. <br />
            <br />
            Remember to bring a photo ID to get through building security.
            <br />
            <br />
            ----- <br />
            <br />
            See you there! <br />
            <br />
            Best,Hengki,Giovanni,Sofian,Riza,Agung The JakartaJS Organizers
          </p>
        </div>
      </div>
    );
  }
}
