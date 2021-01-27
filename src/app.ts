showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
enum Category { JavaScript, Css, Html, TypeScript, Angular }


function getAllBooks() {
    const books = <const>[
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

function getBookByID(id: number): any {
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

const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);