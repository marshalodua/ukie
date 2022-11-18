const express        = require('express');
const cors           = require('cors');
const app            = express();
const errorHandler   = require('./src/middleware/ErrorHandler');
const router         = require('./src/routes/index');
const accountHandler = require('./src/middleware/AccountHandler');
const userRoute      = require('./src/routes/UserRoute');

const port           = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/:token', accountHandler, router);
app.use('/api/user', userRoute);

app.use(errorHandler);


app.listen(port, () => console.log('Server starting on port: ' + port))