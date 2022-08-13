const {getTasklist,
      insertTask,
      delTask} = require('../modules/tasklist.js');

const _getTasklist = (req, res) => {
  getTasklist()
  .then(ret=>{
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

const _insertTask = (req,res) =>{
  insertTask(req.body)
  .then(ret=>{
    console.log(ret);
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

const _delTask= (req,res) =>{
  delTask(req.body)
  .then(ret=>{
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}


module.exports = {
  _getTasklist,
  _insertTask,
  _delTask
}
