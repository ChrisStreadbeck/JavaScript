//------------------------- 
// Group Promises 
//
// const greeting = new Promise((resolve, reject) =>{
//   resolve('Hi there');
//   reject('Oops, bad greeting');
// });

// const updateAccount = new Promise((resolve, reject) => {
//   resolve('Updating last login...');
//   reject('Error updating account with login.');
// });

// const loginActivities = Promise.all([greeting, updateAccount]);

// loginActivities.then(res => {
//   res.forEach(activity => {
//     console.log(activity);
//   })
// })

// ----------------------------
// Async and Await in javascript

// const login = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('User logged in...');
//     }, 2000);
//   });
// }

// const updateAccount = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Updating last login...');
//     }, 2000);
//   });
// }

// async function loginActivities() {
//   const returnedLogin = await login();
//   console.log(returnedLogin);

//   const returnedUpdateAccount = await updateAccount();
//   console.log(returnedUpdateAccount);
// }

// loginActivities();

//----------------------------------
// Leveraging Closures - function wrapped inside of a variable and passed into other functions

// const login = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('User logged in...');
//     }, 4000);
//   });
// }

// const updateAccount = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Updating last login...');
//     }, 2000);
//   });
// }

// async function loginActivities(login, updateAccount) {
//   const returnedLogin = await login;
//   console.log(returnedLogin);

//   const returnedUpdateAccount = await updateAccount;
//   console.log(returnedUpdateAccount);
// }

// loginActivities(login(), updateAccount());

// so you wrap the functions into one call, so that it displays the output at the same time
// regardless of delays added into the code.

//-------------------------------------------
// Async / Await to contact API's in javascript

// async function queryApis() {
//   const postsPromise = fetch('https://api.dailysmarty.com/posts');
//   const posts = await postsPromise.then(response => response.json());
//   console.log(posts);

//   const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
//   const repos = await reposPromise.then(response => response.json());
//   console.log(repos);
// }

// queryApis();

//--------------------------------------
// Error handling in Async and Await

// async function queryApis() {
//   try { // try makes it attempt the operation, but doesn't cause a program failure
//     const postsPromise = fetch('http://api.dailysmarty.com/posts');
//     const posts = await postsPromise.then(res => res.json());
//     console.log(posts);
//   } catch(err) {
//     console.log(err);
//     console.log('There was an error with the DailySmarty API');
//   }

//   try {
//     const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
//     const repos = await reposPromise.then(res => res.json());
//     console.log(repos);
//   } catch(err) {
//     console.log(err);
//     console.log('There was an error with the GitHub API');
//   }
// }

// queryApis();

//-----------------------------------------