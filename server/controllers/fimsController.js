import { getNext, postBatchImport } from '../models/fleet/fimsPeriod';
import { insertBatch } from '../models/fleet/fimsVoucher'

module.exports.getPeriod = (config, db, callback) => {
  getNext(config, db, (err, res) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(err, res);
  });
};

module.exports.insertBatch = (data, config, db, callback) => {
  insertBatch(data, config, db, (err, res) => {
    if (err) {
      callback(err, null);
    }
    console.log('posting batch to period');
    postBatchImport(data,config,db,(err,res)=>{
      if (err) {
        callback(err.null);
      }
      //inserted new period (or updated) - now get NEXT period
      getNext(config,db,(err,res) =>{
        callback(err, res);
      })
    })
  });
};
