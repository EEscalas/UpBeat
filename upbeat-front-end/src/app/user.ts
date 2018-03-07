export class User {
    constructor(
        public id: number = null,
        public name: string = "",
        public password: string = "",
        public isDJ: boolean = true
    ) {}
}