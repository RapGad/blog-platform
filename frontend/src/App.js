import './App.css';
import Header from './components/Header.jsx';
import  LandingPage  from './components/LandingPage.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Homepage from './components/Homepage.jsx';
import { BrowserRouter as Router, Routes,Route }  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
