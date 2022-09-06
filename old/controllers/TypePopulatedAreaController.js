const TypePopulatedArea = require("../models/TypePopulatedArea");
const TypePopulatedAreaService = require('../services/TypePopulatedAreaService');

class TypePopulatedAreaController {

    async create(req, res) {
        try {
            const {name} = req.body;

            if (!name) {
                return res.status(400).json({message:'Не введены данные'});
            }

            const candidate = await TypePopulatedArea.findOne({name});

            if (candidate) {
                return res.status(400).json({message: 'Такой элемент уже существует'});
            }

            const population = await TypePopulatedArea.create({name});

            res.json(population);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getAll(req, res) {
        try {
            const population = await TypePopulatedArea.find();

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

            const population = await TypePopulatedArea.findOne({name: className});

            res.json(population);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async update(req, res) {
        try {
            const updatedTypePopulatedArea = await TypePopulatedAreaService.update(req.body);
            return res.json(updatedTypePopulatedArea);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const population = await TypePopulatedAreaService.create(req.params.id);
            return res.json(population)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new TypePopulatedAreaController();