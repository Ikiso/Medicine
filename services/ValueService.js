const Value = require("../models/Value");

class ValueService {
    async create(name) {
        const createdValue = await Value.create({name});
        return createdValue;
    }

    async getAll() {
        const values = await Value.find();
        return values;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const value = await Value.findById(id);
        return value;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }
        const value = await Value.findByIdAndUpdate(name._id, name, {new: true});
        return value;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const value = await Value.findByIdAndDelete(id);
        return value;
    }
}

module.exports = new ValueService();