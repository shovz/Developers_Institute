const {db} = require('../connections/myDb.js');

const getTasklist = () => {
  return db('tasklist')
  .select('*')
}

const insertTask = (task) => {
  return db('tasklist')
  .insert(task)
  .returning('*')
}

const delTask = (data) => {
  console.log(data);
  return db('tasklist')
  .del()
  .where({id:data.id})
  .returning('*')
}


module.exports = {
  getTasklist,
  insertTask,
  delTask
}
