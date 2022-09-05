/* eslint-disable no-use-before-define */
import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <header className='header'>
          <div>QTemu</div>
          <nav>
            <a href='#create'>Create Meetup</a>
            <a href='#explore'>Explore</a>
            <a href='#login' className='btn-login'>Login</a>
          </nav>
        </header>
      
        <main>
          <aside className='bio'>
            <div className='img'></div>
            <div className='content'>
              <h1>Hacktiv8 Meetup</h1>
              <div className='data-row'>
                <p className='head'>Location</p>
                <p>Jakarta</p>
              </div>
              <div className='data-row'>
                <p className='head'>Members</p>
                <p>1,078</p>
              </div>
              <div className='data-row'>
                <p className='head'>Organizers</p>
                <p>Adhy Wiranata</p>
              </div>
              <button>Join Us</button>
            </div>
            
              
            
          </aside>
          <article>
            <h1 className='heading'>Next Meetup</h1>
            <div className='container'>
              <p>Awesome meetup and event</p>
              <p className='date'>25 January 2019</p>
              <p>
                Hello, JavaSript &amp; Node.js Ninjas! <br />
                Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
                The meetup format will contain some short stories and technical talks. <br />
                If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. <br />
                <br />
                Remember to bring a photo ID to get through building security. <br />
                <br />
                ----- <br />
                <br />
                See you there! <br />
                <br />
                Best,Hengki,Giovanni,Sofian,Riza,Agung The JakartaJS Organizers
              </p>
            </div>
          </article>
          <article>
            <h1 className='heading'>About Meetup</h1>
            <p className='about'>
              Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area <br />
              <br />
              Twitter: @JakartaJS and we use the hashtag #jakartajs
            </p>
          </article>
          <article className='members'>
            <div className="flex">
              <h1 className='heading'>Members</h1>
              <button className='seeAll'>See all</button>
            </div>
            <div className="container">
              <div className='member-img'></div>
              <div className="content">
                <p>Organizers</p>
                <div className="data-row">
                  <p className='head'>Adhy Wiranata</p>
                  <p>4 others</p>
                </div>
              </div>
            </div>     
            
          </article>
          <article>
            <div className="flex">
              <h1 className='heading'>Past Meetups</h1>
              <button className='seeAll'>See all</button>
            </div>
            <div className="flex">
              <div className='container'>
                <p>
                  27 November 2017 <br />
                  <hr />
                  #39 JakartaJS April Meetup with kumparan <br />
                  139 <span style={{color: '#999999'}}>went</span>
                </p>
                <button className='btn-view'>View</button>
              </div>
              <div className='container'>
                <p>
                  27 Ocotber 2017 <br />
                  <hr />
                  #38 JakartaJS April Meetup with Blibli <br />
                  113 <span style={{color: '#999999'}}>went</span>
                </p>
                <button className='btn-view'>View</button>
              </div>
              <div className='container'>
                <p>
                  27 September 2017 <br />
                  <hr />
                  #37 JakartaJS April Meetup with Hacktiv8 <br />
                  110 <span style={{color: '#999999'}}>went</span>
                </p>
                <button className='btn-view'>View</button>
              </div>
            </div>
          </article>
        </main>

        <footer>
          <hr />
          <p>Copyright Havktiv8 2018</p>
        </footer>
      </div>
      
    );
  }
}
