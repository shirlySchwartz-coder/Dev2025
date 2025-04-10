export class ClientsErrors {
    public status : number;
    public message : string;

    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
   
}

export class RouteNotFound extends ClientsErrors {
    constructor(url: string) {
        super(404, `${url} Route not found`);
    }
}