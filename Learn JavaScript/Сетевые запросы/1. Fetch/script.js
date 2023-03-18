'use strict';

// Задание 1

async function getUsers(names) {
  const requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
  const responses = await Promise.allSettled(requests);
  const users = responses.map(response => {
    if (response.status === 'fulfilled' && response.value.ok) {
      return response.value.json();
    } else {
      return null;
    }
  });
  return Promise.all(users);
}

// OR
// AFTER EACH FETCH DATA READING INDEPENDENTLY OF ANOTHER REQUEST

async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}