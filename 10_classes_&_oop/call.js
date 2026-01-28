function SetUserName(username) {
  // complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new createUser("Pardeep", "pardeep@gmail.com", "123");
console.log(user);
