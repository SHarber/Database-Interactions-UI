var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 62815);
app.use(express.static('public'));


/*************************************************************************
 * Display the table
*************************************************************************/
app.get('/', function(err, rows, fields){
  var context = {};
  mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = rows;
    res.render('home',context);
    });
});


/*************************************************************************
 * Insert into table & Show table
*************************************************************************/
app.get('/insert',function(req,res,next){
  var context = {};
  mysql.pool.query('INSERT INTO workouts (`name`, reps, weight, date, lbs) VALUES (?, ?, ?, ?, ?)', [req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.lbs], function(err, result){
    if(err){
      next(err);
      return;
    }
     mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = rows;  
    res.render('home',context);
  });
  });
});


/*************************************************************************
 * Update Table
*************************************************************************/
app.get('/update',function(req,res,next){
  var context = {};
  mysql.pool.query("SELECT * FROM workouts WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    if(result.length == 1){
      var curVals = result[0];
      mysql.pool.query("UPDATE workouts SET name=?, reps=?, weight=?, date=?, lbs=? WHERE id=? ",
        [req.query.name || curVals.name, req.query.reps || curVals.reps, req.query.weight || curVals.weight, rep.query.date || curVals.date, rep.query.lbs || curVals.lbs,  req.query.id],
        function(err, result){
        if(err){
          next(err);
          return;
        }
         mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
          if(err){
            next(err);
            return;
          }
        context.results = rows;
        res.render('home',context);
         });
      });
    }
  });
});




/*************************************************************************
 * Delete from table
*************************************************************************/
app.get('/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM workouts WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
  mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = rows;  
    res.render('home',context);
  });
});
});


/*************************************************************************
 * Reset the table 
*************************************************************************/
app.get('/reset-table',function(req,res,next){
  var context = {};
    mysql.pool.query('DROP TABLE IF EXISTS workouts', function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = 'CREATE TABLE workouts('+
    'id INT PRIMARY KEY AUTO_INCREMENT,'+
    'name VARCHAR(255) NOT NULL,'+
    'reps INT,'+
    'weight INT,'+
    'date DATE,'+
    'lbs BOOLEAN)';
    mysql.pool.query(createString, function(err){
      context.results = 'Table reset';
      res.render('home',context);
    })
  });
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
