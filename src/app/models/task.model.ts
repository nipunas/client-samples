export class Task {
    name: string;
    description: string;
    completed: boolean;
}

// ES6 Feature : Shorthand for Initializing Properties
export class ExtendedTask {
    function(name: string, description: string) {
        return {
            name,
            description
        };
    }
}

export class BaseModel {
    name: string;
    options: {};
    url: string;
    data: any[];
    constructor(options = {}, data = []) { // class constructor
        this.name = 'Base';
        this.url = 'http://azat.co/api';
        this.data = data;
        this.options = options;
    }

    getName() { // class method
        console.log(`Class name: ${this.name}`);
    }
}

export class AccountModel extends BaseModel {
    constructor(options, data) {
        super();
    }
}
