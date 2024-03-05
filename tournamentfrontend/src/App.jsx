import React from 'react';
import './App.css';
import LoginForm from './components/login_form/login_form.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/get_profile/profile.jsx';
import { frontURLs } from './components/enums.tsx';

import Teams from './components/teams/get_teams/teams.jsx';
import Events from './components/events/get_events/events.jsx';
import CreateEventForm from './components/events/create_evemt_form/create_event_form.jsx';
import CreateTeamForm from './components/teams/create_team/create_team_form.jsx';
import Nominations from './components/nominations/get_nominations/nominations.jsx';
import CreateNominationsForm from './components/nominations/create_nomination/create_nominations.jsx';
import CreateParticipantForm from './components/participants/create_participants/create_participant.jsx';
import Participants from './components/participants/get_participants/get_participants.jsx';
import AppendParticipantToTeam from './components/participants/append_participant_to_team_form/append_participant_to_team_form.jsx';
import ProfileEdit from './components/profile/profile_edit/profile_edit_form.jsx';
import NominationEvents from './components/nominations_events/get_npminations_events/get_nominations_events.jsx';
import NavBar from './components/navbar/navbar.jsx';
import AppendTeamToNominationEvents from './components/nominations_events/append_team_to_nomination_event/append_team_to_nomination_event.jsx';

function App() {


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
          <Route path={frontURLs.create_team_suffix} element={<CreateTeamForm />} />
          <Route path={frontURLs.create_nominations_suffix} element={<CreateNominationsForm />} />
          <Route path={frontURLs.create_participant_suffix} element={<CreateParticipantForm />} />
          <Route path={frontURLs.particiapant_suffix} element={<Participants />} />
          <Route path={frontURLs.append_participant_to_team_suffix} element={<AppendParticipantToTeam />} />
          <Route path={frontURLs.profile_edit} element={<ProfileEdit />} />
          <Route path={frontURLs.get_nomination_events_full_info_suffix} element={<NominationEvents />} />
          <Route path={frontURLs.append_team_to_nomination_event_suffix} element={<AppendTeamToNominationEvents />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
