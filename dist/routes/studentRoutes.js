"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../apps/student");
const express = require('express');
function StudentRoutes() {
    let router = new express.Router();
    router.post('/create', student_1.Student.create);
    router.get('/read', student_1.Student.read);
    router.put('/update', student_1.Student.update);
    router.delete('/delete', student_1.Student.delete);
}
module.exports = StudentRoutes;
//# sourceMappingURL=studentRoutes.js.map