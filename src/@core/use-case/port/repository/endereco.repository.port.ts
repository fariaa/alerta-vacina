import { EnderecoPort } from "../entity/endereco.entity.port";

export interface EnderecoRepositoryPort {
    findBy(id: number) : Promise<EnderecoPort>
    create(endereco: EnderecoPort) : Promise<EnderecoPort>
}