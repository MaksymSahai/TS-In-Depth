import { positiveInteger } from "../decorators";
import { ReferenceItem } from "./ReferenceItem";

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    //@positiveInteger
    set copies(value: number) {
        this._copies = value
    }

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