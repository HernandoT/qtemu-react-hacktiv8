import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import NextMeetup from './components/NextMeetup/NextMeetup';
import AboutMeetup from './components/AboutMeetup/AboutMeetup';
import Members from './components/Members/Members';
import Footer from './components/Footer/Footer';
import PastMeetup from './components/PastMeetup/PastMeetup';

export default class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <header>
          <Header/>
        </header>
      
        <main>
          <aside>
            <Bio />
          </aside>

          <article>
            <NextMeetup />
          </article>

          <article>
            <AboutMeetup />
          </article>

          <article>
            <Members />
          </article>

          <article>
            <PastMeetup />
          </article>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
      
    );
  }
}
