import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.entity";


@Injectable()
export class ProdutoService {
     // Retorna todos os produtos cadastrados no banco de dados utilizando o padrão Active Record do TypeORM

    async findall(): Promise<Produto[]> {
        return Produto.find();
    }
}