let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let anotherPassportWithAddress = {
    ...passportWithAddress,
    address: {
        ...passportWithAddress.address
    }
}

anotherPassportWithAddress.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city === 'LA')
console.log(anotherPassportWithAddress.address.city === 'Bobryisk')