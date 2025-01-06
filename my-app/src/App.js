// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CreateUser from '../src/pages/createuser';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<h1>Welcome to MERN App</h1> 
//       } />
//         <Route path="/createuser" element={<CreateUser />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CreateUser from '../src/pages/createuser';
import ListEvent from '../src/pages/ListEvent';
import './App.css'; // Add your custom CSS file for styling

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="welcome-text">Organizer Window</h1>
      <button className="center-button" onClick={() => navigate('/createuser')}>
        Go to Create User
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/createuser" element={<CreateUser />} />
        <Route path="/listevent" element={<ListEvent />} />
      </Routes>
    </Router>
  );
}

export default App;

