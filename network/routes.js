const usersRoute = require('../componets/user/network');


function routes (server){
    
    server.use('/api/users', usersRoute);
}

module.exports = routes;