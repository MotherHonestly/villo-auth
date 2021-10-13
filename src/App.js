import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Auth from './containers/Auth/Auth';

function App() {
  return (
    <BrowserRouter basename="/emails">
      <div className="App">
        <Auth />
      </div>
    </BrowserRouter>
  );
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
