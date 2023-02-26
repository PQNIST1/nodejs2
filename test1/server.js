const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/classDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const classSchema = {
  ClasId: String,
  ClassName: String,
  NumStudent:Number,
  teacherId: String,
};

const Class = mongoose.model('Class', classSchema);

app.get('/', function(req, res) {
  Class.find({}, function(err, foundClasses) {
    res.render('index', { classes: foundClasses });
  });
});

app.get('/add', function(req, res) {
  res.render('add');
});

app.post('/add', function(req, res) {
  const newClass = new Class({
    ClasId: req.body.name,
    ClassName: req.body.class,
    NumStudent: req.body.student,
    teacherId: req.body.teacher,
  });

  newClass.save(function(err) {
    if (!err) {
      res.redirect('/');
    }
  });
});

app.route('/edit/:classId')
.get(function(req, res) {
  const classId = req.params.classId;

  Class.findById(classId, function(err, foundClass) {
    res.render('update', { classs: foundClass });
  });
})
.post(function(req, res) {
  const classId = req.params.classId;

  Class.findByIdAndUpdate(
    classId,
    {
    ClasId: req.body.name,
    ClassName: req.body.class,
    NumStudent: req.body.student,
    teacherId: req.body.teacher,
    },
    function(err) {
      if (!err) {
        res.redirect('/');
      }
    }
  );
});

app.route('/delete/:classId')
.get(function(req, res) {
  const classId = req.params.classId;

  Class.findByIdAndRemove(classId, function(err) {
    if (!err) {
      res.redirect('/');
    }
  });
});

app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
