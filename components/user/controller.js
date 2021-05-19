//test
const users = [{
    "name": "Javier Morales",
    "age": 25
}];

function list() {
    return new Promise((resolve, reject) =>{
        
        resolve(users);
    });
    
}

function create(){

}

module.exports = {
    list,
    create
}