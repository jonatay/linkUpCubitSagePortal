import { version } from '../../package.json';
import { Router } from 'express';
import fimsApi from './fimsApi.js';

export default ({ config, db }) => {
  let api = Router();

  // mount the facets resource
  api.use('/fims', fimsApi({ config, db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}
