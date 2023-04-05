import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  // Kode yang lebih singkat
  // constructor(private bookService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.createBook(title, author, category);
  }
}
