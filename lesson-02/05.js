let passport = {
    name: "Petr",
    surname: "Petrov",
};

let anotherPassport = {...passport};
anotherPassport.name = 'Ivan'

console.log(passport.name === 'Petr')
console.log(anotherPassport.name === 'Ivan')