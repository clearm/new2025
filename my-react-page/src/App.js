// import logo from './logo.svg';
// import './App.css';
// import './Intro.css';
import { useState } from 'react';
// import Footer from './Layouts/Footer';

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
            <h2 className="text-3xl font-bold text-center mb-6">Welcome to My Website</h2>
            <p className="text-lg text-center mb-8">This is a simple, responsive webpage built with Tailwind CSS.</p>

            <div>

              <nav className="px-4 my-4">
                <ul className="flex space-x-6">
                  <li><button onClick={() => setCurrentPage('home')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">Home</button></li>
                  <li><button onClick={() => setCurrentPage('about')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">About</button></li>
                  <li><button onClick={() => setCurrentPage('services')} className="bg-blue-400 px-5 rounded-xl hover:text-blue-300 shadow-md ">Services</button></li>
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
