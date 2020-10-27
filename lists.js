const TodoList = require("./models").todoList

async function createLists(){
    try {
        const list1 = await TodoList.create({
            name: "Jur van Toledo",
            user_Id: 1,
        })

        const list2 = await TodoList.create({
            name: "Nino Christiaans",
            user_Id: 2,
        })

        const list3 = await TodoList.create({
            name: "Job Stouthart",
            user_Id: 3,
        })
        const list4 = await TodoList.create({
            name: "Suresh Ramdin",
            user_Id: 4,
        })

        return [list1, list2, list3, list4].map(item => item.get({ plain: true }));
    } catch (e) {
        console.error(e);
    }
}

createLists().then(lists => console.log(lists));