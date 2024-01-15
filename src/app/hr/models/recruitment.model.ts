import { Sex } from "./sex.model";

export class Recruitment {
    firstName?: string = '';
    surName?: string = '';
    address_1?: string = '';
    address_2?: string = '';
    town?: string = '';
    postCode?: string = '';
    mobile?: string = '';
    telephone?: string = '';
    email?: string = '';
    sex?: Sex ;
    dob?: string = '';
    ethnicity?: string = '';
    nationality?: string = '';
    religion?: string = '';
    sexuality?: string = '';
    status?: string = '';
    statusDate?: string = '';
    source?: string = '';
    comment?: string = '';
    interviewDate?: string = '';
    transport?: string = '';
    expNote?: string = '';
    isArchived: boolean = false;

    constructor() { }

    deserialize(input: any) {
        Object.assign(this, input);
        this.sex = new Sex()
        return this;
    }

    toOdata() {
        // this.collection = undefined;
        return this;
    }
}