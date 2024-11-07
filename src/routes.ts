/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";

export const DEFAULT_LOGOUT_REDIRECT = "/dashboard/auth/login";
