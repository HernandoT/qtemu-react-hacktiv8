import React, { Component } from 'react';
import './PastMeetup.css';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

export default class PastMeetup extends Component {
  render() {
    return (
      <div><div className="flex">
      <Heading text={'Past Meetups'}/>
        <button className='seeAll'>See all</button>
      </div>
      <div className="flex">
        <div className='container'>
          <p>
            27 November 2017 <br />
            <hr />
            #39 JakartaJS April Meetup with kumparan <br />
            139 <span className='went'>went</span>
          </p>
          <Button
            btnStyle="btnView"
            btnText="View"
            />
        </div>
        <div className='container'>
          <p>
            27 Ocotber 2017 <br />
            <hr />
            #38 JakartaJS April Meetup with Blibli <br />
            113 <span className='went'>went</span>
          </p>
          <Button
            btnStyle="btnView"
            btnText="View"
            />
        </div>
        <div className='container'>
          <p>
            27 September 2017 <br />
            <hr />
            #37 JakartaJS April Meetup with Hacktiv8 <br />
            110 <span className='went'>went</span>
          </p>
          <Button
            btnStyle="btnView"
            btnText="View"
            />
        </div>
      </div></div>
    )
  }
}
