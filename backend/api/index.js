import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import SwaggerExpress from 'swagger-express-mw';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { keepAlive: 120 , useMongoClient: true }, (err) => {
    if(err) throw err;
    console.log(`MongoDb is running on ${mongoUri}`)
});

app.use(express.static(path.join(__dirname, '../public')));
if (config.env === 'development') {
  app.use(logger('dev'));
}
// mount all routes on /api path
app.use('/api', routes);
const swaggerConfig = {
  appRoot: path.resolve(__dirname, '../'),
};
SwaggerExpress.create(swaggerConfig, (err, swaggerExpress) => {
  if (err) { throw err; }
  swaggerExpress.register(app);
  app.listen(config.port, () => {
    console.log(`server started on port ${config.port} (${config.env})`);
  });
});


export default app;
