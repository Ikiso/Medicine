const Value = require("../models/Value");
const Disease = require("../models/Disease");
const Year = require('../models/Year');
const Population = require('../models/Population');
const PopulatedArea = require('../models/PopulatedArea');
const MorbidityType = require('../models/MorbidityType');
const ValueService = require('../services/ValueService');

const {ObjectId} = require('mongodb');
const limit = 180;

//  db.populatedareas.find({ "type_populated_area.$id": ObjectId('629216633b519e0cc88e87de') })
//  db.populatedareas.updateMany({type_populated_area: "Район"}, {$set: { type_populated_area: { $id: ObjectId('629216633b519e0cc88e87dd') }} })

class ValueController {

    async create(req, res) {
        try {
            console.log(req.body)

            let length = req.body.length;
            let Result = []

            for (let i = 0; i < length; i++) {
                const { morbidity_type, population, year, disease_class, populated_area, value } = req.body[i];

                if (!morbidity_type || !population || !year || !disease_class || !populated_area || (value === null) || (value === undefined)) {
                    console.log(`я тут с ${req.body[i]}`)
                    continue;
                    // return res.status(400).json({message:'Не введены данные'});
                }

                const _morbidity_type = await MorbidityType.findOne( { name: morbidity_type } );
                const _population = await Population.findOne( { name: population } );
                const _disease_class = await Disease.findOne( { name: disease_class } );
                const _populated_area = await PopulatedArea.findOne( { name: populated_area } );
                const _year = await Year.findOne( { year: year } );

                if (!_morbidity_type || !_population || !_year || !_disease_class || !_populated_area) {
                    console.log(`я здесь с ${req.body[i]}`)
                    if (!Result.length) {
                        Result.push('Какие-то данные были неверно введены');
                    }
                    continue;
                    // return res.status(400).json({message:'Неверно введены данные', data: form});
                }

                let parameter = {
                    "morbidity_type.$id": _morbidity_type._id,
                    "population.$id": _population._id,
                    "year.$id": _year._id,
                    "disease_class.$id": _disease_class._id,
                    "populated_area.$id": _populated_area._id
                };

                const candidate = await Value.findOne(parameter);

                if (candidate) {
                    console.log(`я и здесь с ${req.body[i]}`)
                    continue;
                    // return res.status(400).json({message: 'Такой элемент уже существует'});
                }

                parameter['value'] = value === undefined ? null : value;

                const result = await Value.create(parameter);
            }

            res.json(Result);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getAll(req, res) {
        try {
            const value = await Value.find();
            res.json(value);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getOne(req, res) {
        try {
            const value = await Value.find({
                "disease_class.$id": ObjectId("629216433b519e0cc88e87c8")
            }).limit(2);
            console.log(value);

            if (value) {
                console.log(ObjectId(value[0].morbidity_type.$id));

                const morbiditytype = await MorbidityType.findOne({
                    _id: ObjectId(value[0].morbidity_type.$id)
                });

                console.log(morbiditytype);
            }

            res.json(value);
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async getBy(req, res) {
        try {
            // req.body = { morbidity_type, population, year, disease_class, populated_area, count }

            console.log(req.body)
            let forms = {}

            let _count = req.body['count'] ?  req.body['count'] : limit;
            if((_count) > limit) {
                _count = 100;
            }

            for (let key in req.body) {
                let str = '';

                let isType = key === 'morbidity_type' ||  key === 'population' || key === 'year' || key === 'populated_area' || key === 'disease_class';

                if (isType && req.body[key] !== '') {
                    let _key;
                    switch (key) {
                        case 'morbidity_type':
                            _key = await MorbidityType.findOne({name: req.body[key]})
                            break;
                        case 'population':
                            _key = await Population.findOne({name: req.body[key]})
                            break;
                        case 'year':
                            _key = await Year.findOne({year: req.body[key]})
                            break;
                        case 'disease_class':
                            _key = await Disease.findOne({name: req.body[key]})
                            break;
                        case 'populated_area':
                            _key = await PopulatedArea.findOne({name: req.body[key]})
                            break;
                        default:
                            break;
                    }
                    str += key;
                    str += '.$id';
                    forms[str] = _key._id;
                }
            }
            let value = await Value.find(forms).limit(_count);
            let total = []
            for (let i = 0; i < value.length; ++i) {
                let item = value[i];
                let param = {};
                param['value'] = item['value'];

                for (let key in req.body) {
                    let _key;
                    switch (key) {
                        case 'morbidity_type':
                            if (req.body[key] === '') {
                                _key = await MorbidityType.findOne({
                                    _id: ObjectId( item[key].$id )
                                });
                                param[key] = _key.name;
                            } else {
                                param[key] = req.body[key];
                            }
                            break;
                        case 'population':
                            if (req.body[key] === '') {
                                _key = await Population.findOne({
                                    _id: ObjectId( item[key].$id )
                                });
                                param[key] = _key.name;
                            } else {
                                param[key] = req.body[key];
                            }
                            break;
                        case 'year':
                            if (req.body[key] === '') {
                                _key = await Year.findOne({
                                    _id: ObjectId( item[key].$id )
                                });
                                param[key] = _key.year;
                            } else {
                                param[key] = req.body[key];
                            }
                            break;
                        case 'disease_class':
                            if (req.body[key] === '') {
                                _key = await Disease.findOne({
                                    _id: ObjectId( item[key].$id )
                                });
                                param[key] = _key.name;
                            } else {
                                param[key] = req.body[key];
                            }
                            break;
                        case 'populated_area':
                            if (req.body[key] === '') {
                                _key = await PopulatedArea.findOne({
                                    _id: ObjectId( item[key].$id )
                                });
                                param[key] = _key.name;
                            } else {
                                param[key] = req.body[key];
                            }
                            break;
                        default:
                            break;
                    }
                }
                total.push(param);
            }
            console.log(total);
            res.json(total);

        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await ValueService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await ValueService.create(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new ValueController();