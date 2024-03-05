export enum APIEndpoints {
    base = "http://127.0.0.1:8000",

    login = base + "/auth/login",
    logout = base + "/auth/logout",
    
    profile = base + "/users/profile",
    events = base + "/events/event",
    nominations = base + "/nominations/nominations",
    teams = base + "/teams/teams",
    participants = base + "/participants/participant",
    participant_to_team = base + "/participants/participant_to_team",
    get_nomination_events_full_info = base + "/tournament_registration/nomination_event_full_info",
    get_nomination_events_names = base + "/tournament_registration/nomination_event_names"
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
    get_nomination_events_full_info_suffix = "/get_nominatio_events",
    append_team_to_nomination_event_suffix = "/append_team_to_nomination_event",

    login = base + login_suffix,
    profile = base + profile_suffix,

    events = base + events_suffix,

    profile_edit = "/profile_edit"

}