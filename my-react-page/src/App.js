// import logo from './logo.svg';
import './App.css';
import './Intro.css';

import { useState } from 'react';

import Footer from './Layouts/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return  (
          <section className="Intro-section">
            <h1> Home Page</h1>
          </section>
        );
      case 'about':
        return (
          <section className="Intro-section">
            <h1> about Page</h1>
            {/* <Box></Box> */}
          </section>
        );

      default:
        return <h1>404 Not Found</h1>;
    }
  };

  return (
    <div className="App">
      <h2> Welcome MJH's Home    </h2>

      <div>
        <button className="Intro-orange-btn" onClick={() => setCurrentPage('home')}>Home</button>
        <button className="Intro-orange-btn" onClick={() => setCurrentPage('about')}>About</button>
        <div> {renderPage()} </div>
      </div>

      {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  Learn React
        </a>
      </header>
      */}

        <Footer></Footer>

    </div>
  );
}

export default App;
