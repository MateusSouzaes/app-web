import { Controller, Get, Render } from '@nestjs/common';

@Controller('produto')
export class ProdutoController {
  @Get()
  @Render('produto/inicial')
  getProduto(): object {
    return {
      titulo: "Produtos - consulta"
    }
    };
 }
