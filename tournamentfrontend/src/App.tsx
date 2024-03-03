import React from 'react';
import './App.css';
import LoginForm from './components/loginform/loginform.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from './components/myprofile/myprofile.tsx';
import { frontURLs } from './components/enums.tsx';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={frontURLs.login_suffix} element={<LoginForm />} onEnter={} />
        <Route path={frontURLs.my_profile_suffix} element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
