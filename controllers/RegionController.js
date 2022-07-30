const Region = require("../models/Region");
const RegionService = require('../services/RegionService');

class RegionController {

    async create(req, res) {
        try {
            const {name} = req.body;

            if (!name) {
                return res.status(400).json({message:'Не введены данные'});
            }

            const candidate = await Region.findOne({name});

            if (candidate) {
                return res.status(400).json({message: 'Такой элемент уже существует'});
            }

            const population = await Region.create({name});

            res.json(population);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getAll(req, res) {
        try {
            const population = await Region.find();

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

            const population = await Region.findOne({name: className});

            res.json(population);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async update(req, res) {
        try {
            const updatedRegion = await RegionService.update(req.body);
            return res.json(updatedRegion);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const population = await RegionService.create(req.params.id);
            return res.json(population)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new RegionController();