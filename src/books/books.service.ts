import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBooks(): any[] {
    return this.books;
  }

  getBookById(id: string) {
    const bookIdx = this.findBookById(id);
    return this.books[bookIdx];
  }

  createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }

  updateBook(id: string, title: string, author: string, category: string) {
    const bookIdx = this.findBookById(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
    console.log(this.books[bookIdx]);
  }

  deleteBook(id: string) {
    const bookIdx = this.findBookById(id);
    this.books.splice(bookIdx, 1);
  }

  findBookById(id: string) {
    const bookIdx = this.books.findIndex((book) => book.id === id);
    if (bookIdx === -1) {
      throw new NotFoundException(`Book with id ${id} is not found`);
    }
    return bookIdx;
  }
}
