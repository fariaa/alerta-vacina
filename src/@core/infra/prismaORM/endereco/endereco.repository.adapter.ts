import { PrismaClient } from "@prisma/client";
import { EnderecoPort } from "src/@core/use-case/port/entity/endereco.entity.port";
import { EnderecoRepositoryPort } from "src/@core/use-case/port/repository/endereco.repository.port";

export class EnderecoRepository implements EnderecoRepositoryPort {


    constructor(private prisma: PrismaClient) {}

    findBy(id: number): Promise<EnderecoPort> {
        
        return this.prisma.endereco.findFirst({
            where: {
                id
            }
        });
    }

    create(endereco: EnderecoPort): Promise<EnderecoPort> {
        
        return this.prisma.endereco.create({
            data: endereco
        });
    }
}