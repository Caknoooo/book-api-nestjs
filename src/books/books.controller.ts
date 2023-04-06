import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
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

  @Get('/:id')
  getBookById(@Param('id') id: string) {
    return this.booksService.getBookById(id);
  }

  @Post()
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.createBook(title, author, category);
  }

  @Put('/:id')
  updateBook(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    console.log(id, title, author, category);
    return this.booksService.updateBook(id, title, author, category);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    this.booksService.deleteBook(id);
  }
}
