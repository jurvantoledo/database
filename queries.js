const User = require("./models").user
const TodoList = require("./models").todoList
const TodoItem = require("./models").todoItem
const Tag = require("./models").tag

async function createQuerySample(){
    const users = await TodoList.findAll({include: {model: TodoList}})
    return users.map(user => user.get({ plain: true }))
}

createQuerySample().then(user => console.log(user));

async function itemsList() {
    const allItems = await TodoItem.findAll({include: {model: TodoList}})
    return allItems.map(item => item.get({plain: true}))

}

itemsList().then(item => console.log(item))

async function myTodos() {
    const todos = await TodoItem.findAll({where: { important: true } });
    return todos.map(todo => todo.get({ plain: true }));
}

myTodos().then(result => console.log(result))