export enum APIEndpoints {
    base = "http://127.0.0.1:8000",

    login = base + "/auth/login",
    logout = base + "/auth/logout",
    
    profile = base + "/users/get_my_profile"
  }

export enum frontURLs {
    base = "http://127.0.0.1:3000",

    login_suffix = "/login",
    profile_suffix = "/profile",
    events_suffix = "/events",
    nominations_suffix = "/nominations",

    login = base + login_suffix,
    profile = base + profile_suffix,

    events = base + events_suffix,
}