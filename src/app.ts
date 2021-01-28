/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
enum Category { JavaScript, Css, Html, TypeScript, Angular }

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

type BookProperties = keyof Book;

function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.Css, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`)

    const book = books.find((book: { available: boolean }) => book.available)
    console.log(`First available book: ${book.title}`)
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();

    return books.filter((book: any) => book.category === category)
        .map(book => book.title);
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];

    return [title, author];
}

function calcTotalPages(): bigint {
    const data = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) console.log(`Customer Age: ${age}`)
    if (city) console.log(`Customer City: ${city}`)
}

function getBookByID(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer Name: ${customer}`);

    const titles: string[] = [];

    bookIDs.map(id => {
        const book = getBookByID(id);
        if (book?.available) {
            titles.push(book.title);
        }
    });

    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }
        else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);

        }
    }
    else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available)
                .map(book => book.title);

        }

    }

    return [];
}

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value shuld have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }

    return book[prop];
}

class ReferenceItem {
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

    constructor(id: number, public title: string, private year: number) {
        console.log('Creating a new referenceItem...')
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }

    printItem(): void {
        console.log(`${this.title} was pablished in ${this.year}`);
        console.log(ReferenceItem.department);
    }
}



// Task 02.01
//logFirstAvailable(getAllBooks());
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//console.log(calcTotalPages());

//Task 03.01
//const myID: string = createCustomerID("Ann", 10);
//console.log(myID);
//let idGenerator: (name: string, id: number) => string;
//idGenerator = (name: string, id: number) => `${id}-${name}`;
//idGenerator = createCustomerID;
//console.log(idGenerator('Boris', 20))

//Task 03.02
//createCustomer('Ann');
//createCustomer('Ann', 30);
//createCustomer('Ann', 30, 'Kyiv');

//console.log(getBookTitlesByCategory());
//logFirstAvailable();
//console.log(getBookByID(1));

//const myBooks = checkoutBooks('Ann', 1, 2, 4);
//console.log(myBooks);

//Task 03.03

//console.log(getTitles(1, true));
//console.log(getTitles(false));

//Task 03.04

//console.log(bookTitleTransform('typescript'));
//console.log(bookTitleTransform(100));

//Task 04.01
//const myBook: Book = {
//    id: 5,
//    title: 'Colors, Backgrounds, and Gradients',
//    author: 'Eric A. Meyer',
//   available: true,
//   category: Category.Css,
//  pages: 200,
//    //year: 2015,
//    //copies: 3
//    markDamaged: (reason: string) => `Damaged: ${reason}`;
//};

//printBook(myBook);

//console.log(myBook.markDamaged('missing back cover'));

//Task 04.02

//const logDamage: DamageLogger = (reason: string) => `Damaged: ${reason}`;
//console.log(logDamage('missing back cover'));


//Task 04.03

//const favoriteAuthor: Author = {
//    name: 'Anna',
//    email:'anna@mail.com',
//    numBookPublished: 3
//};

//const favoriteLibrarian: Librarian = {
//    name: 'Boris',
//    email: 'boris@mail.com',
//    department: 'Classical Literature',
//    assistCustomer(custName: string)
//}

//Task 04.04

//const offer: any = {
//    book: {
//        title: 'Essential TypeScript',
//        authors: []
//    }
//};

// a.  offer.magazine
// b.  offer.magazine.getTitle()
// c.  offer.book.getTitile()
// d.  offer.book.authors[0]
//console.log(offer.magazine);
//console.log(offer.magazine.getTitle());
//console.log(offer.book.getTitile());
//console.log(offer.book.authors[0]);

//Task 04.05

//console.log(getProperty(myBook, 'title'));
//console.log(getProperty(myBook, 'markDamaged'));
//console.log(getProperty(myBook, 'isbn'));

//Task 05.01
//const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2021);
//ref.printItem();

//ref.publisher = 'Publisher';
//console.log(ref.publisher);
//console.log(ref);
//console.log(ref.getID());

