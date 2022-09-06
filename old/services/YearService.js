const Year = require("../models/Year");

class YearService {
    async create(name) {
        const createdYear = await Year.create({name});
        return createdYear;
    }

    async getAll() {
        const years = await Year.find();
        return years;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const year = await Year.findById(id);
        return year;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }
        const year = await Year.findByIdAndUpdate(name._id, name, {new: true});
        return year;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const year = await Year.findByIdAndDelete(id);
        return year;
    }
}

module.exports = new YearService();