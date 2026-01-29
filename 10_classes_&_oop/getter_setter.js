class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }
  get password() {
    return `${this._password}pardeep`
  }
  set password(value) {
    this._password = value;
  }
}

const pardeep = new User("p@rdeep.ai", "abc");
console.log(pardeep.email, pardeep.password);
