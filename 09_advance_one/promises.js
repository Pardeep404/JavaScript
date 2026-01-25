const promisesOne = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Async Task Is Complete");
    res();
  }, 1000);
});

promisesOne.then(() => {
  console.log("Promise consumed");
});

// ---------------------------------------------------------------------
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

// ---------------------------------------------------------------------
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "deepu", email: "google@gmail.com" });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data.username);
});

// ---------------------------------------------------------------------
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Pardeep", password: "123" });
    } else {
      reject("Error: Somthing went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((uName) => {
    console.log(uName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promises is either resolved or rejected");
  });

// ---------------------------------------------------------------------
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("Error: Somthing went wrong");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response.username);
  } catch (error) {
    console.log(error);
  }
}
consumedPromiseFive();

// ---------------------------------------------------------------------
async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
// getAllUser();

// ---------------------------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
