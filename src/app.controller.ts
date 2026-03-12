import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getHello(): object {
    
    let pessoas = [
      {nome: 'Maria', email: 'maria@example.com'},
      {nome: 'João', email: 'joao@example.com'},
      {nome: 'Ana', email: 'ana@example.com'},
      {nome: 'Pedro', email: 'pedro@example.com'}
    ]
    return { 
      titulo: 'AppWeb com NestJs', 
      horaAgora: new Date().toLocaleTimeString(),
      listaPessoas: pessoas
    };
  }
}
