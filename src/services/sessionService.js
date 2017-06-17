import request from './request';

class SessionService {
  login(email, password) {
    return sessionPromise(request.post(`/api/auth/login`, { email, password }));
  }

  register(firstName, lastName, email, password) {
    return sessionPromise(request.post(`/api/auth/register`, { firstName, lastName, email, password }));
  }
}

function sessionPromise(res) {
  return new Promise((resolve, reject) => {
    res.then(r => r.json())
      .then(data => {
        if (data) {
          resolve(data);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        console.log('we got an error, it was: ', err.message);
      });
  });
}

sessionService = new SessionService();
export default sessionService;