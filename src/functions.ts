import { Category } from "./enums";
import { Book, LibMgrCallback } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.Css, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`)

    const book = books.find((book: { available: boolean }) => book.available)
    console.log(`First available book: ${book.title}`)
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();

    return books.filter((book: any) => book.category === category)
        .map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];

    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) console.log(`Customer Age: ${age}`)
    if (city) console.log(`Customer City: ${city}`)
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
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

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
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

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value shuld have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

// export function getProperty(book: Book, prop: BookProperties): any {
//     if (typeof book[prop] === 'function') {
//         return (book[prop] as Function).name;
//     }

//     return book[prop];
// }

export function getProperty<TObject, Tkey extends keyof TObject>(book: TObject, prop: Tkey): TObject[Tkey] | string {
    if (typeof book[prop] === 'function') {
        return book[prop]['name'];
    }

    return book[prop];
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2)
}

export function getBooksByCategory(category: Category, callBack: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callBack(null, titles);
            } else {
                throw new Error('No books found.');
            }
        } catch (error) {
            callBack(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>(
        (resolve, reject) => {
            setTimeout(() => {
                const titles = getBookTitlesByCategory(category);
                if (titles.length > 0) {
                    resolve(titles);
                }
                else {
                    reject('No books found');
                }
            }, 2000);
        }
    );
}

export function logSearchResults(category: Category): Promise<void> {
    const titles = getBooksByCategoryPromise(category);
    console.log(titles);
}