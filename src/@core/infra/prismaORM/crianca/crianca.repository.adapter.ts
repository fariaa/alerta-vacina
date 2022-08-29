import { PrismaClient } from "@prisma/client";
import { CriancaPort } from "src/@core/use-case/port/entity/crianca.entity.port";
import { CriancaRepositoryPort } from "src/@core/use-case/port/repository/crianca.repository.port";

export class CriancaRepository implements CriancaRepositoryPort {


    constructor(private prisma: PrismaClient) { }

    create(crianca: CriancaPort): Promise<CriancaPort> {

        const { cpf, dataNascimento, responsavelId, nome } = crianca;

        return this.prisma.crianca.create({
            data: {
                cpf,
                responsavel_id: responsavelId,
                nome,
                data_nascimento: new Date()
            }
        });
    }
}