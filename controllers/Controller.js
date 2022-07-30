const Object = require("../models/ObjectModel");


class Controller {

    async create(req, res) {
        try {
            const {name} = req.body;
            const object = await Object.create({name});

            res.json(object);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }
}

module.exports = new Controller();