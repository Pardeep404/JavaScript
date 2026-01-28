// ES6

class userOne {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encrytPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new userOne("Pardeep", "google@gmail.com", "123");
console.log(chai.encrytPassword());
console.log(chai.changeUsername());

// behind the scene

function UserTwo(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserTwo.prototype.encrytPassword = function () {
  return `${this.password}abc`;
};
UserTwo.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new UserTwo("Deepu", "deepu@gmail.com", "123");
console.log(tea.encrytPassword());
console.log(tea.changeUsername());
