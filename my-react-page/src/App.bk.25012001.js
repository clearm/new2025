
function App() {


    return (
      <div className="App">

          {/* <!-- Header --> */}
          <header className="bg-blue-600 text-white py-4 ">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
              <h1 className="text-2xl font-bold">MJH</h1>
              <nav>
                <ul className="flex space-x-6">
                  <li><button  className="hover:text-blue-300">Home</button></li>
                  <li><button  className="hover:text-blue-300">About</button></li>
                  <li><button  className="hover:text-blue-300">Services</button></li>

                </ul>
              </nav>
            </div>
          </header>

          {/* <!-- Main Content --> */}
          <main className="my-8 min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-6">Welcome to My Website</h2>
              <p className="text-lg text-center mb-8">This is a simple, responsive webpage built with Tailwind CSS.</p>

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
