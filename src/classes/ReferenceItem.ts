import { timeout } from "../decorators";

export abstract class ReferenceItem {
    //title: string;
    //year: number;

    //constructor(newtitle: string, newYear: number) {
    //    console.log('Creating a new referenceItem...')
    //    this.title = newtitle;
    //    this.year = newYear;
    // }

    #id: number;

    private _publisher: string;

    static department: string = 'Classical Literature';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new referenceItem...')
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }

    @timeout(3000)
    printItem(): void {
        console.log(`${this.title} was pablished in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    abstract printCitation(): void;
}