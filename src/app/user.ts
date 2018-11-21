import { Response } from '@angular/http';
export class User {
    // Name: string;
    // Email: string;
    // Role: string;
    // Pr_role: string;
    // Useremail: string;
    // card_role: string;
    // ibank_role: string;
    // Response: string;

    constructor(
        public Name?: string,
        public Email?: string,
        public Role?: string,
        public Pr_role?: string,
        public Useremail?: string,
        public card_role?: string,
        public ibank_role?: string,
        // tslint:disable-next-line:no-shadowed-variable
        public Response?: string
        ) { }
}
