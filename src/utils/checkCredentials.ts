import users from '../data/users.json';

export const checkEmail = (email: string) => new Promise<boolean>((resolve, reject) => {
  try {
    const user = users.filter((user) => user.email === email);
    setTimeout(() => {
      resolve(user.length > 0);
    }, 500);
  } catch (error) {
    reject(error);
  }
});

export const login = (email: string, password: string) => new Promise<boolean>((resolve, reject) => {
  try {
    const user = users.filter((user) => user.email === email && user.password === password);
    setTimeout(() => {
      resolve(user.length > 0);
    }, 500);
  } catch (error) {
    reject(error);
  }
});
