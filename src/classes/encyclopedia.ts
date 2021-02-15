import { ReferenceItem } from "./ReferenceItem";

export default class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`Editions: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title}-${this.year}`);
    }
}