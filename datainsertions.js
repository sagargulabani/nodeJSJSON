var mysql = require('mysql2');
var data = require('./batchdata.json');
const Sequelize = require('sequelize');

process.env.UV_THREADPOOL_SIZE = 3;

const sequelize = new Sequelize('nodebatchdb', 'root', '' , {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    pool: {
        min : 30,
        max: 30,
        acquire: 10000000
    }
  });

var startDate = new Date();

var DataTypes = Sequelize;

const dataTable = sequelize.define('data', {
    name : {
        type: DataTypes.STRING
    },
    value1 : {
        type: DataTypes.STRING
    },
    value2 : {
        type: DataTypes.STRING
    },
    value3 : {
        type: DataTypes.STRING
    },
    value4 : {
        type: DataTypes.STRING
    },
    value5 : {
        type: DataTypes.STRING
    },
    value6 : {
        type: DataTypes.STRING
    },
    value7 : {
        type: DataTypes.STRING
    },
    value8 : {
        type: DataTypes.STRING
    },
    value9 : {
        type: DataTypes.STRING
    },
    value10 : {
        type: DataTypes.STRING
    }
})

  sequelize.sync({ force: true }).then( (connection) => {
      if (connection) {
          

        


      } 
  }).then(() => {

        //return dataTable.bulkCreate(data);


        return mypromise(data);
  }).then(() => {
      console.log("promise returned");
    sequelize.close();
  })



var mypromise = (data) => {

    return new Promise((resolve, reject) => {
        
        console.log(data.length);
        var date1 = new Date();
        var count = 300000;
        var count2 = 1;
        var counttotal = count * count2;
        for (var j = 0; j < count2; j++) {
            (function(j) {
                for (var i = 0; i < count; i++ ) {
                    (function(i,j) {
                        console.log("firing" + i);
                        dataTable.create(data[i]).then(
                            (user) => {
                                console.log("i is " + i + "and j is " + j);
                                console.log("done" + user.id);
                                if (user.id == counttotal) {
                                    var date2 = new Date();
                                    var date3 = date2-date1;
                                    console.log(startDate);
                                    console.log(date1);
                                    console.log(date1 - startDate);
                                    console.log(date2);
                                    console.log(date3);

                                    resolve();
                                }
                            }
                        ).catch(err => {
                            console.log(err);
                        });
                    })(i,j);
                }
            })(j);   
        }
    })
}


console.log(data);

