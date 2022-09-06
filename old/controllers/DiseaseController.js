const Disease = require("../models/Disease");
const DiseaseService = require('../services/DiseaseService');

class DiseaseController {

    async create(req, res) {
        try {
            const {name} = req.body;

            if (!name) {
                return res.status(400).json({message:'Не введены данные'});
            }

            const candidate = await Disease.findOne({name});

            if (candidate) {
                return res.status(400).json({message: 'Такой элемент уже существует'});
            }

            const disease = await DiseaseService.create({name});

            res.json(disease);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getAll(req, res) {
        try {
            const disease = await Disease.find();

            console.log(disease);

            res.json(disease);
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

            const disease = await Disease.findOne({name: className});

            res.json(disease);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await DiseaseService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await DiseaseService.create(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new DiseaseController();