"use strict";
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World');
});
app.listen(3000);
//# sourceMappingURL=app.js.map