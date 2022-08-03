const {faker} = require('@faker-js/faker');

const addNames = ()=>{
    let obj = {
        name : faker.name.findName(),
        country: faker.address.country(),
        street :faker.address.street()
    }
    return obj;
}

module.exports = {
    addNames
}