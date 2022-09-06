const Population = require("../models/Population");

class PopulationService {
    async create(name) {
        const createdPopulation = await Population.create({name});
        return createdPopulation;
    }

    async getAll() {
        const populations = await Population.find();
        return populations;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const population = await Population.findById(id);
        return population;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }
        const population = await Population.findByIdAndUpdate(name._id, name, {new: true});
        return population;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const population = await Population.findByIdAndDelete(id);
        return population;
    }
}

module.exports = new PopulationService();