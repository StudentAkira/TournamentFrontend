export enum APIEndpoints {
    base = "http://127.0.0.1:8000",

    login = base + "/auth/login",
    logout = base + "/auth/logout",
    
    profile = base + "/users/profile",
    events = base + "/events/event",
    nominations = base + "/nominations/nominations",
    teams = base + "/teams/teams",
    participants = base + "/participants/participant",
    participant_to_team = base + "/participants/participant_to_team"
  }

export enum frontURLs {
    base = "http://127.0.0.1:3000",

    login_suffix = "/login",
    profile_suffix = "/profile",
    events_suffix = "/events",
    nominations_suffix = "/nominations",
    teams_suffix = "/teams",
    particiapant_suffix = "/participants",
    create_event_suffix = "/events/create",
    create_team_suffix = "/teams/create",
    create_nominations_suffix = "/nominations/create",
    create_participant_suffix = "/create/participant",
    append_participant_to_team_suffix = "/append_participant_to_pteam",

    login = base + login_suffix,
    profile = base + profile_suffix,

    events = base + events_suffix,

}