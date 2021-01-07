import { User } from "./user";

export class Reimbursement {

    // constructor(
    //     amount: number,
    //     description: string,
    //     status: string,
    //     type: string,
    //     author: User
    // )

    constructor(
        public amount?: number,
        public description?: string,
        public status?: string,
        public type?: string,
        public author?: User,
        public receipt?: string,
        public resolver?: User,
        public timeResolved?: Date
    ){}

    
}
