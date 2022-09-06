const MorbidityType = require("../models/MorbidityType");


class MorbidityTypeController {
    async create(name) {
        const createdMorbidityType = await c.create({name});
        return createdMorbidityType;
    }

    async getAll() {
        const morbidityTypes = await MorbidityType.find();
        return morbidityTypes;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const morbidityType = await MorbidityType.findById(id);
        return morbidityType;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }

        const morbidityType = await MorbidityType.findByIdAndUpdate(name._id, name, {new: true});
        return morbidityType;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const morbidityType = await MorbidityType.findByIdAndDelete(id);
        return morbidityType;
    }
}

module.exports = new MorbidityTypeController();