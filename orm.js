var connection = require("./connections.js");

var orm = {
    allParties: function(tableInput){
        var query = 'SELECT * FROM '+tableInput+' ORDER BY party_cost desc'
        connection.query(query, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    },
    findParty: function(tableInput, partyName){
        var query = 'SELECT * FROM '+tableInput+' WHERE party_name="'+partyName+'"'
        connection.query(query, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    },
    findClientByMost: function(tableInput){
        var query = ''
    }
}

orm.allParties('parties_table')
orm.findParty('parties_table', "Bobbys Baby Shower Party")