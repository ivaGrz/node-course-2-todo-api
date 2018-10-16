const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5bc5b4486009de8f6e5d9c4e1';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({   // Returns an array
//     _id: id     //mongoose converts our string to object ID
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({  // Returns one object
//     _id: id 
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5bc465d89f4abe859ff36918';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found!')
    }
    console.log('User: ', user);
}).catch((e) => console.log(e));
