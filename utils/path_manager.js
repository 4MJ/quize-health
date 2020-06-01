const path = require('path')

exports.databasepath = (databaseName)=>{
    return path.join(__dirname , "../database/" , databaseName +".txt");
}