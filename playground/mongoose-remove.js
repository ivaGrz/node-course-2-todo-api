const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

//we dont get removed data back
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//we get back data we removed
// Todo.findOneAndRemove({_id: '5bc84df2b57b06be83961770'}).then((todo) => {

// });

Todo.findByIdAndRemove('5bc84df2b57b06be83961770').then((todo) => {
    console.log(todo);
})