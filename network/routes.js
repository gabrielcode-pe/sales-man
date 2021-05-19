const usersRoute = require('../components/user/network');


function routes (server){
    
    server.use('/api/users', usersRoute);
}

module.exports = routes;