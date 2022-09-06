const PopulatedArea = require("../models/PopulatedArea");

class PopulatedAreaService {
    async create(name) {
        const createdPopulatedArea = await PopulatedArea.create({name});
        return createdPopulatedArea;
    }

    async getAll() {
        const populatedAreas = await PopulatedArea.find();
        return populatedAreas;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const populatedArea = await PopulatedArea.findById(id);
        return populatedArea;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }
        const populatedArea = await PopulatedArea.findByIdAndUpdate(name._id, name, {new: true});
        return populatedArea;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const populatedArea = await PopulatedArea.findByIdAndDelete(id);
        return populatedArea;
    }
}


module.exports = new PopulatedAreaService();