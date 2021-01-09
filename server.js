const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.use('/api/v1/product', require('./routes/productRoutes'));

app.use('/api/v1/user', require('./routes/userRoutes'));

if (process.env.NODE_ENV !== 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get('/', (req, res, next) => {
    res.send('Hello from node server');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
});