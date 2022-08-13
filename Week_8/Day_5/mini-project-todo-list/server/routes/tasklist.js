const express = require('express');
const router = express.Router();

const {_getTasklist,
        _insertTask,
        _delTask} = require('../controllers/tasklist.js');

router.get('/', _getTasklist);
router.post('/addTask', _insertTask);
router.post('/delTask', _delTask);

module.exports = router
