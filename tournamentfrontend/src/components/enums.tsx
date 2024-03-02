export enum APIEndpoints {
    base = "http://127.0.0.1:8000",

    login = base + "/auth/login",
    logout = base + "/auth/logout",

    my_profile = base + "/users/get_my_profile"
  }

export enum frontURLs {
    base = "http://127.0.0.1:3000",

    login_suffix = "/login",
    my_profile_suffix = "/my_profile",

    login = base + login_suffix,
    my_profile = base + my_profile_suffix,
}