export class Sex {
    id?: number;
    type?: string;

    constructor() { }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    toOdata() {
        return this;
    }
}