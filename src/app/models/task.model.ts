export class Task {
    name: string;
    description: string;
    completed: boolean;
}

// ES6 Feature : Shorthand for Initializing Properties
export class ExtendedTask {
    function (name: string, description: string) {
        return {
            name,
            description
        };
    }
}
