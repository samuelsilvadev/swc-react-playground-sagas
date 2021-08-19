const BASE_URL = process.env.BASE_URL || window.location.origin;
const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;

const END_POINTS = {
  EVERYTHING: "/list",
  DETAILS: "/detail",
};

/**
 * @param {string} endpoint
 * @returns {string}
 */
function buildUrl(endpoint) {
  return `${BASE_URL}${endpoint}`;
}

export { BASE_URL, END_POINTS, API_KEY, API_HOST, buildUrl };
