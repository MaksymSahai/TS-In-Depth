import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from "./classes";
import { Category } from "./enums";
import { Book, Librarian, Magazine } from "./interfaces";
import { PersonBook } from "./types";
import type { Library } from "./classes";
import { purge } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
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

//Task 05.02
// const refBook = new /* Encyclopedia */ RefBook(1, 'TypeScript', 2021, 3);
//console.log(refBook);
//refBook.printItem();

//Task 05.03
//const refBook = new Encyclopedia(1, 'TypeScript', 2021, 3);

//console.log(refBook);
//refBook.printCitation();

//Task 05.04

// const favoriteLibrarian: Librarian = new UniversityLibrarian();
//favoriteLibrarian.name = 'Ann';
//favoriteLibrarian.assistCustomer('Boris');

//Task 05.05

// const personBook: PersonBook = {
//     id: 1,
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Css,
//     email: 'anna@example.com',
//     title: 'TypeScrit'
// };

//Task 06.05

// if (true) {
//     import('./classes').then(m => {
//         console.log(new m.Reader)
//     });
// }

//Task 06.06

// let lib: Library;

// lib = {
//     id: 1,
//     name: 'Anna',
//     address: 'unknow'
// }

//Task 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// const result: Book[] = purge<Book>(inventory);
// console.log(result);

// interface G<T> {
//     [index: string]: (a: T) => T;
// }

// let g: G<number>;
// g = {
//     m1(a: number) {
//         return a;
//     },

//     m2(a: number) {
//         return a;
//     }
// };

// Task 07.02

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magShelf = new Shelf<Book>();
// inventory.forEach(mag => magShelf.add(mag));
// console.log(magShelf.getFirst());
