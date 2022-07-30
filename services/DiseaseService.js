const Disease = require("../models/Disease");

class DiseaseService {
    async create(name) {
        const createdDisease = await Disease.create({name});
        return createdDisease;
    }

    async getAll() {
        const diseases = await Disease.find();
        return diseases;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const disease = await Disease.findById(id);
        return disease;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }

        const disease = await Disease.findByIdAndUpdate(name._id, name, {new: true});
        return disease;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const disease = await Disease.findByIdAndDelete(id);
        return disease;
    }
}


module.exports = new DiseaseService();