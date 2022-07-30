const Router = require('express');
const DiseaseController = require('./controllers/DiseaseController.js')
const ValueController = require('./controllers/ValueController.js')
const bodyParser = require('body-parser').json();

const router = new Router();

// mongodb+srv://admindb:ferimasv@cluster0.1cnio.mongodb.net/medicine?
// mongodb://127.0.0.1:27017/medicine

router.get('/disease',DiseaseController.getAll);

router.get('/value',ValueController.getAll);
router.post('/value/one', bodyParser, ValueController.getBy);
router.post('/value/create', bodyParser, ValueController.create);
router.get('/value/oneees', ValueController.getOne);


module.exports = router;