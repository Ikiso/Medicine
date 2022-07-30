const PopulatedArea = require("../models/PopulatedArea");
const PopulatedAreaService = require('../services/PopulatedAreaService');

class PopulatedAreaController {

    async create(req, res) {
        try {
            const {name} = req.body;

            if (!name) {
                return res.status(400).json({message:'Не введены данные'});
            }

            const candidate = await PopulatedArea.findOne({name});

            if (candidate) {
                return res.status(400).json({message: 'Такой элемент уже существует'});
            }

            const populatedArea = await PopulatedArea.create({name});

            res.json(PopulatedArea);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getAll(req, res) {
        try {
            const populatedArea = await PopulatedArea.find();

            res.json(populatedArea);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getOne(req, res) {
        try {
            const {className} = req.body;

            if (!className) {
                return res.status(400).json({message:'Не выбран параметр'});
            }

            const populatedArea = await PopulatedArea.findOne({name: className});

            res.json(populatedArea);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async update(req, res) {
        try {
            const updatedPopulatedArea = await PopulatedAreaService.update(req.body);
            return res.json(updatedPopulatedArea);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const populatedArea = await PopulatedAreaService.create(req.params.id);
            return res.json(populatedArea)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new PopulatedAreaController();