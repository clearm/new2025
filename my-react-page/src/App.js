// import logo from './logo.svg';
// import './App.css';
// import './Intro.css';
import { useState } from 'react';
// import Footer from './Layouts/Footer';

import './Games/TicTacToeStyle.css';

import TicTacToe from './Games/TicTacToe';

import Test1 from './Test/Test1';

import Test2 from './Test/Test2';





function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {

    switch (currentPage) {
      case 'home':
        return (
          <section className="Intro-section">
            <h1> Intro Page </h1>
          </section>
        );
      case 'tictactoe':
        return  (
          <section className="Intro-section">
            <h1> Tictactoe Page </h1>
            <TicTacToe></TicTacToe>
          </section>
        );
      case 'test1':
        return (
          <section className="Intro-section">
            <h1> Test1 Page</h1>
            <Test1></Test1>
          </section>
        );

      case 'test2':
        return (
          <section className="Intro-section">
            <h1> Test2 Page</h1>
            <Test2></Test2>
          </section>
        );

      case 'services':
        return (
          <section className="Intro-section">
             {/* <!-- Two Columns Layout --> */}
             <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Column 1</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat id libero.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Column 2</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat id libero.</p>
              </div>
            </div>
          </section>
        );

      default:
        return <h1>404 Not Found</h1>;
    }

  };

  return (
    <div className="App">

        {/* <!-- Main Content --> */}
        <main className="my-8 min-h-screen">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Welcome to My Studying Website</h2>
            <p className="text-lg text-center mb-8">
              This is a simple, responsive webpage built with Tailwind CSS + React19 .
              Thanks to Github Page^^
            </p>
            <div>
              <nav >
                <ul className="flex space-x-4">
                  <li><button onClick={() => setCurrentPage('tictactoe')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">TicTacToe</button></li>
                  <li><button onClick={() => setCurrentPage('test1')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">Test1</button></li>
                  <li><button onClick={() => setCurrentPage('test2')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">Test2</button></li>
                </ul>
                <ul className="flex space-x-1 my-3" >
                  <li><button onClick={() => setCurrentPage('about2')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">About</button></li>
                  <li><button onClick={() => setCurrentPage('about2')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">About</button></li>
                  <li><button onClick={() => setCurrentPage('about2')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">About</button></li>
                </ul>
              </nav>

            </div>

            {renderPage()}

          </div>
        </main>


        {/* <!-- Footer --> */}
        <footer className="bg-blue-400  text-white py-4">
          <div className="max-w-screen-xl mx-auto text-center">
            <p>&copy; 2025 MJH. All rights reserved.</p>
          </div>
        </footer>

    </div>
  );

}

export default App;
