import { Prisma, PrismaClient } from "@prisma/client";
import { Responsavel } from "src/@core/domain/entity/responsavel.entity";
import { PerfilPort } from "src/@core/use-case/port/entity/perfil.entity.port";
import { ResponsavelPort } from "src/@core/use-case/port/entity/responsavel.entity.port";
import { ResponsavelRepositoryPort } from "src/@core/use-case/port/repository/responsavel.repository.port";

export class ResponsavelRepository implements ResponsavelRepositoryPort {


    constructor(private prisma: PrismaClient) { }

    findBy(cpf: string): Promise<ResponsavelPort> {

        return this.prisma.responsavel.findFirst({
            where: { cpf }
        });
    }

    findById(id: number): Promise<ResponsavelPort> {

        return this.prisma.responsavel.findFirst({
            where: { id: Number(id) }
        });
    }

    async edit(perfil: PerfilPort): Promise<ResponsavelPort> {

        return this.prisma.responsavel.update({
            where: {
                id: perfil.id
            },
            data: {
                nome: perfil.nome,
                data_nascimento: new Date()
            }
        })
    }

    async create(responsavel: ResponsavelPort): Promise<ResponsavelPort> {

        const responsavelDomain = this.responsavelPortToDomainMapper(responsavel);

        return this.prisma.responsavel.create({
            data: responsavelDomain
        })
    }

    private responsavelPortToDomainMapper(responsavelPort: ResponsavelPort) : Responsavel {


        const { acessoId, enderecoId, nome, cpf, dataNascimento } = responsavelPort;

        return {
            acesso_id: acessoId,
            endereco_id: enderecoId,
            nome,
            cpf,
            data_nascimento: new Date()
        }
    }
}