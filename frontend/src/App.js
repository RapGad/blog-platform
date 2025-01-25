import './App.css';
import Header from './components/Header.jsx';
import  LandingPage  from './components/LandingPage.jsx';
import Login from './components/login/Login.jsx';
import SignUp from './components/SignUp.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';
import Homepage from './components/homepage/Homepage.jsx';
import SingleBlog from './components/single-blog/SingleBlog.jsx';
import CreatePost from './components/create-post/CreatePost.jsx';
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
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
