const Population = require("../models/ Population");
const PopulationService = require('../services/ PopulationService');

class PopulationController {

    async create(req, res) {
        try {
            const {name} = req.body;

            if (!name) {
                return res.status(400).json({message:'Не введены данные'});
            }

            const candidate = await Population.findOne({name});

            if (candidate) {
                return res.status(400).json({message: 'Такой элемент уже существует'});
            }

            const population = await Population.create({name});

            res.json(population);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getAll(req, res) {
        try {
            const population = await Population.find();

            res.json(population);
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

            const population = await Population.findOne({name: className});

            res.json(population);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async update(req, res) {
        try {
            const updatedPopulation = await PopulationService.update(req.body);
            return res.json(updatedPopulation);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const population = await PopulationService.create(req.params.id);
            return res.json(population)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new PopulationController();