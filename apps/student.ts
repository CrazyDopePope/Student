export class Student {

    public static create(request: any, response: any) {
        console.log(request);
        return response.status(200).json({status: 'success', message: 'Student Created!'});
    }

    public static read(response: any){
        console.log(response);
        return response.status(200).json({status: 'success', message: 'Student Read!'})
    }

    public static update(request: any, response: any){
        console.log(request);
        return response.status(200).json({status: 'update success', message: 'Student Updated!'})
    }
    public static delete(response: any){
        console.log(response);
        return response.status(200).json({status: 'deleted', message: 'Studnet Deleted Successfully!'})
    }
 }

