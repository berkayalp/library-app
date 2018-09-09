export class Book {
    bookId: number;
    bookName: string;
    summary: string;
    authorId: number;
    typeId: number;
    rating: number;
    image?: string;
}

export const BOOKS: Book[] = [
    {bookId:1, bookName: 'Cehennem Cicegi', summary: 'Sample Summary',authorId: 1, typeId: 1, rating:4},
    {bookId:2, bookName: 'Veda', summary: 'Sample Summary',authorId: 2, typeId: 1, rating:3},
    {bookId:3, bookName: 'Huzursuzluk', summary: 'Sample Summary',authorId: 3, typeId: 2, rating:4},
]