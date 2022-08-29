import { PrismaClient } from "@prisma/client";
import { AcessoPort } from "src/@core/use-case/port/entity/acesso.entity.port";
import { LoginRepositoryPort } from "src/@core/use-case/port/repository/login.repository.port";

export class LoginRepository implements LoginRepositoryPort {

    constructor(private prisma: PrismaClient) {
    }

    findByEmail(email: string): Promise<AcessoPort> {
        return this.prisma.acesso.findFirst({
            where: {
                email
            }
        })
    }

    async login(email: string, senha: string): Promise<any> {

        return this.prisma.acesso.findFirst({
            where: {
                email,
                senha
            }
        });
    }
}