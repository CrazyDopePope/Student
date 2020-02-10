"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    static create(request, response) {
        console.log(request);
        return response.status(200).json({ status: 'success', message: 'Student Created!' });
    }
    static read(response) {
        console.log(response);
        return response.status(200).json({ status: 'success', message: 'Student Read!' });
    }
    static update(request, response) {
        console.log(request);
        return response.status(200).json({ status: 'update success', message: 'Student Updated!' });
    }
    static delete(response) {
        console.log(response);
        return response.status(200).json({ status: 'deleted', message: 'Studnet Deleted Successfully!' });
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map