export class ProblemaDetails {
    status: number;
    response: string;
    type: string;
    title : string;
    detail: string;
    instance : string;
    errors : any;
    indication : string;

    constructor(){
        this.status = 0;
        this.response = "";
        this.type="";
        this.title = "";
        this.detail = "";
        this.instance = "";
        this.errors = {};
        this.indication = "";
    }
}