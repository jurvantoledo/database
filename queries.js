const User = require("./models").user

async function createQuerySample(){
    try {
        const user1 = await User.create({
            name: "Jur van Toledo",
            email: "jurvantoledo@live.nl",
            phone: 1234567,
            password: 1111,
        })

        const user2 = await User.create({
            name: "Nino Christiaans",
            email: "nino.hoffmans@gmail.com",
            phone: 1234567,
            password: 1111,
        })

        const user3 = await User.create({
            name: "Job Stouthart",
            email: "job.stouthart@gmail.com",
            phone: 1234567,
            password: 1111,
        })
        const findByPk = await User.findByPk(1);

        const createNewUser = await User.create({
            name: "Suresh Ramdin",
            email: "suresh.poepmetcurrie@gmail.com",
            phone: 1234567,
            password: 1111
        })

        return [user1, user2, user3, findByPk, createNewUser].map(item => item.get({ plain: true }));
    } catch (e) {
        console.error(e);
    }
}

createQuerySample().then(users => console.log(users));