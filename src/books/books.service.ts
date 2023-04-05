import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBooks(): any[] {
    return this.books;
  }

  createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }
}
