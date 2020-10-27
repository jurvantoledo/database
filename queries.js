const User = require("./models").user
const TodoList = require("./models").todoList
const TodoItem = require("./models").todoItem

async function createQuerySample(){
    const users = await TodoList.findAll({include: {model: TodoList}})
    return users.map(user => user.get({ plain: true }))
}

//createQuerySample().then(user => console.log(user));

async function itemsWithList() {
    const items = await TodoItem.findAll({include: {model: TodoList}})
    return items.map(item => item.get({plain: true}))

}

itemsWithList().then(item => console.log(item))