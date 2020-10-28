const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList

app.use(express.json())

app.get("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId)
    const user = await User.findByPk(userId)

    if (!user) {
      res.status(404).send("User not found")
    }

    res.send(user)
  } catch (e) {
    
  }
})

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId)
    const user = await User.findByPk(userId, {
      include: [TodoList]
    })
    if (!user) {
      res.status(404).send("User not found !")
    }
    res.send(user.TodoList)
  } catch (e) {
    next(e)
  }
})

app.post("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      const newList = await TodoList.create({ userId, ...req.body });
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId)
    const userToUpdate = await User.findByPk(userId)

    if(!userToUpdate) {
      res.status(404).send("User not found")
    }

    const updatedUser = await userToUpdate.update(req.body)
    res.json(updatedUser)
  } catch (e) {
    next(e)
  }
})

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    }
    const user = await User.create(req.body)
    res.json(user)
  } catch (e) {
    next(e)
  }
});

//Get a list
app.get("/todoLists", async (req, res, next) => {
  try {
    const myList = await TodoList.findAll()
    res.send(myList)
  } catch (e) {
    next(e)
  }
})

// Update an existing list
app.put("/todoLists/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId)
    const listToUpdate = await TodoList.findByPk(userId)

    if(!listToUpdate) {
      res.status(404).send("List not found")
    }
    const updatedList = await listToUpdate.update(req.body)
    res.json(updatedList)
  } catch (e) {
    next(e);
  }
})

app.post("/todoLists", async (req, res, next) => {
  try {
    const name = req.body.name
    if (!name || name === " ") {
      res.status(404).send("Must provide a valid name")
    }
    const listName = await TodoList.create(req.body)
  } catch (e) {
    next(e)
  }
})

// Delete a user's list
app.delete("/users/:userId/lists/:userId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.userId)
    const toDelete = await TodoList.findByPk(listId)

    if(!toDelete) {
      res.status(404).send("List not found")
    }

    const deleted = await toDelete.destroy()
    res.json(deleted)
  } catch (e) {
    next(e)
  }
});

// Delete all user's lists
app.delete("/users/:userId/todoLists/", async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const allLists = await TodoList.destroy({ where: { userId: userId } });
    console.log(allLists);

    res.json(allLists);
  } catch (e) {
    next(e);
  }
}); 

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));