const Region = require("../models/Region");

class RegionService {
    async create(name) {
        const createdRegion = await Region.create({name});
        return createdRegion;
    }

    async getAll() {
        const regions = await Region.find();
        return regions;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const region = await Region.findById(id);
        return region;
    }

    async update(name) {
        if (!name._id) {
            throw new Error('не указан ID')
        }
        const region = await Region.findByIdAndUpdate(name._id, name, {new: true});
        return region;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const region = await Region.findByIdAndDelete(id);
        return region;
    }
}

module.exports = new RegionService();