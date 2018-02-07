var orm = require('../config/orm.js');


var burger = {
 
  selectAll: function(hb) {
    orm.selectAll('burgers', function(res) {
      hb(res);
    });
  },

  insertOne: function(cols, vals, hb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      hb(res);
    });
  },

 
  updateOne: function(objColVals, condition, hb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      hb(res);
    });
  }
};


module.exports = burger;