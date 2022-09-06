const TypePopulatedArea = require("../models/TypePopulatedArea");

class TypePopulatedAreaService {
    async create(name) {
        const createdTypePopulatedArea = await TypePopulatedArea.create({name});
        return createdTypePopulatedArea;
    }

    async getAll() {
        const typePopulatedAreas = await TypePopulatedArea.find();
        return typePopulatedAreas;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const typePopulatedArea = await TypePopulatedArea.findById(id);
        return typePopulatedArea;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }
        const typePopulatedArea = await TypePopulatedArea.findByIdAndUpdate(name._id, name, {new: true});
        return typePopulatedArea;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const typePopulatedArea = await TypePopulatedArea.findByIdAndDelete(id);
        return typePopulatedArea;
    }
}

module.exports = new TypePopulatedAreaService();