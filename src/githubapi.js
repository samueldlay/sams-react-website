async function getProfile () {
  const username = 'samueldlay'
  const profile = await fetch(`https://api.github.com/users/${username}`);
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

export default async function getUserData () {
  const username = 'samueldlay'
  const profile = await fetch(`https://api.github.com/users/${username}/repos`);
  const response = await profile.json();
  try {
    if (response.message) {
      throw new Error(response.message)
    } else {
      return {repos: response,
      getprofile: await getProfile()
    };
    }
  }
  catch (err) {
    console.log('ERROR IN GETREPOS: ', err);
    return err;
  }
}