import { format, logger, logMethod, logParameter, sealed, writable } from "../decorators";
import * as interfaces from "./../interfaces";

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements interfaces.Librarian, interfaces.C {
    @format()
    name: string;
    email: string;
    a: string;
    c: string
    department: string;

    //@logMethod
    assistCustomer(/* @logParameter */ custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }

    @writable(true)
    assistFaculty() {
        console.log("«Assisting faculty");
    }

    @writable(false)
    teachCommunity() {
        console.log("Teaching community")
    }
}