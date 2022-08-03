const Regex = require("regex");
const reg = /\d+/g;

const extractNumbers =(str)=>{
    let match = str.match(reg);
    return match.join('');
}

module.exports={
    extractNumbers: extractNumbers
}