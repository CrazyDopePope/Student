
const express = require('express')
const app = express();
import {StudentRoutes} from  './routes/studentRoutes';

app.use('/api/student', StudentRoutes);

// app.get('/', function (req: any, res: any) {
//     console.log(req);
//     res.send('Hello World')
//   });
   
app.listen(3000);







