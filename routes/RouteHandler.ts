import { Student } from '../apps/student';
const express = require('express');

/**
 * Routing and validation if any*
 */

export class RouteHandler {
    public static studentRoutes(request: any, response: any) {
        
        console.log(request);
        return response.status(200).json({status: 'success', message: 'Student Created!'});
    }
}

const StudentRoutes = () => {
    let router: any = new express.Router();
    router.post('/create', Student.create);
    router.get('/read', Student.read);
    router.put('/update', Student.update);
    router.delete('/delete', Student.delete);

};

module.exports = StudentRoutes;
