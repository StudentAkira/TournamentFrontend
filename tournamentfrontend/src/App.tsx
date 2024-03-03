import React from 'react';
import './App.css';
import LoginForm from './components/login_form/login_form.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/profile.tsx';
import { frontURLs } from './components/enums.tsx';
import { AuthManager } from './managers/auth_manager.tsx';
import NavBar from './components/navbar/navbar.tsx';
import Nominations from './components/nominations/nominations.tsx';
import Teams from './components/teams/teams.jsx';
import Events from './components/events/get_events/events.tsx';
import CreateEventForm from './components/events/create_evemt_form/create_event_form.jsx';

function App() {

  let auth_manager = new AuthManager();

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={frontURLs.login_suffix} element={<LoginForm />} />
        <Route path={frontURLs.profile_suffix} element={<Profile />} />
        <Route path={frontURLs.events_suffix} element={<Events />} />
        <Route path={frontURLs.nominations_suffix} element={<Nominations />} />
        <Route path={frontURLs.teams_suffix} element={<Teams />} />
        <Route path={frontURLs.create_event_suffix} element={<CreateEventForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
