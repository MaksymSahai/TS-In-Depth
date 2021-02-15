import * as interfaces from "./../interfaces";

export class UniversityLibrarian implements interfaces.Librarian, interfaces.C {
    name: string;
    email: string;
    a: string;
    c: string

    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
}