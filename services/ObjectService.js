const Object = require("../models/ObjectModel");

class ObjectService {
    async create(req, res) {
        try {




            res.json('');
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }
}


module.exports = new ObjectService();