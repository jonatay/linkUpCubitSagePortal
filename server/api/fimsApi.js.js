import { Router } from 'express';
import {getPeriod, insertBatch} from '../controllers/fimsController'

export default ({ config, db }) => {
  let api = Router();

  api.get('/period-get', (req, res) => {
    getPeriod(config,db, (err,resP)=>{
      if (err) {
        res.json(err);
        return;
      }
      res.json(resP);
    });
  });
  api.post('/voucher-insert-batch', (req, res) => {
    //console.log(req.body.data);
    insertBatch(JSON.parse(req.body.data), config,db, (err,resP)=>{
      if (err) {
        throw err;// res.json(err);
      }
      res.json(resP);
    });
  });

  return api;
}