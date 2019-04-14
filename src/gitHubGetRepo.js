const axios = require("axios");

async function gitHubGetRepo(username) {
  const res = await axios.get(`https://api.github.com/users/${username}/repos`);
  return res;
}
gitHubGetRepo("AbetangJoseph");

module.exports = gitHubGetRepo;
