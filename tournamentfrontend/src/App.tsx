import React from 'react';
import './App.css';
import LoginForm from './components/login_form/login_form.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from './components/profile/profile.tsx';
import { frontURLs } from './components/enums.tsx';
import { AuthManager } from './managers/auth_manager.tsx';
import Events from './components/events/events.tsx';
import NavBar from './components/navbar/navbar.tsx';

function App() {

  let auth_manager = new AuthManager();

  return (
    <div className="App">
      {<NavBar />}
      <BrowserRouter>
      <Routes>
        <Route path={frontURLs.login_suffix} element={<LoginForm />} />
        <Route path={frontURLs.profile_suffix} element={<MyProfile />} />
        <Route path={frontURLs.events_suffix} element={<Events />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
