import { Category } from './enums';

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    //markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

interface A {
    a: string;
}

interface B extends Partial<A> {
    b: string;
}

interface C {
    a: string;
    c: string;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBookPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

export { DamageLogger as Logger, C, Book, Person, Author, Librarian }