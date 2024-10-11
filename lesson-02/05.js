let passport = {
    name: "Petr",
    surname: "Petrov",
};

let anotherPassport = {...passport};
anotherPassport.name = 'Ivan'

console.log(passport.name)
console.log(anotherPassport.name)