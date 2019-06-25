const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR-SECRET-ID';
const params = `?client_id=${id}&&client_secret=${sec}`;

async function getProfile (username) {
  const profile = await fetch(`https://api.github.com/users/samueldlay`);
  const response = await profile.json();
  try {
    if (response.message) {
      throw new Error(response.message, username)
    } else {
      return response;
    }
  }
  catch (err) {
    console.log('ERROR IN GETPROFILE: ', err);
    return err;
  }
}

async function getRepos (username) {
  const profile = await fetch(`https://api.github.com/users/samueldlay/repos`);
  const response = await profile.json();
  try {
    if (response.message) {
      throw new Error(response.message)
    } else {
      return response;
    }
  }
  catch (err) {
    console.log('ERROR IN GETREPOS: ', err);
    return err;
  }
}

function getStarCount(repos) {
  return repos.reduce((count, {stargazers_count}) => count + stargazers_count, 0)
}

function calculateScore (followers, repos) {
  return followers + getStarCount(repos);
}

export default async function getUserData (username) {
  const promiseAll = Promise.all([getProfile(username), getRepos(username)]);
  const userData = await promiseAll.then(async ([profile, repos]) => {
    if (repos.message || profile.message) {
      return repos || profile;
    }
    
    return ({
    profile: profile,
    score: calculateScore(profile.followers, repos)
  })
})
  return userData;
}