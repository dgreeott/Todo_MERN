const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const PORT = 4000;
const dotenv = require("dotenv");

dotenv.config();

let Todo = require('./todo.modal');

app.use(cors());
app.use(bodyParser.json());

const url = `${process.env.DB_CONNECT}`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose
  .connect(url,connectionParams)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) 
            console.log(err);
        else 
            res.json(todos)
    
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
    .then(todo => {
        res.status(200).json({'todo': 'todo added successfully'});
    })
    .catch(err => {
        res.status(400).send('Adding new appointment failed');
    });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo) {
            res.status(404).send('data is no found');
        } else {
            todo.todo_descirption = req.body.todo_descirption;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated')
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            })
        }
    })
})


todoRoutes.route('/delete/:id').delete(function(req, res) {
    Todo.findByIdAndRemove(req.params.id, function(err, todo) {
        if (!todo) {
            res.status(404).send('data is no found');
        } else {
            todo.todo_descirption = req.body.todo_descirption;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo Deleted')
            })
            .catch(err => {
                res.status(400).send("Deleting not possible");
            })
        }
    })
});

app.use('/todos', todoRoutes);




app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
