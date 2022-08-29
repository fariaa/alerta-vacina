import { AcessoRespositoryPort } from "../../../use-case/port/repository/acesso.repository.port";
import { AcessoPort } from "../../../use-case/port/entity/acesso.entity.port";

import { PrismaClient } from '@prisma/client'

export class AcessoRepository implements AcessoRespositoryPort {

    constructor(private prisma: PrismaClient) { }

    exists(email: string): Promise<any> {

        return this.prisma.acesso.findFirst({
            where: {
                email
            }
        })
    }

    create(acesso: AcessoPort): Promise<any> {

        return this.prisma.acesso.create({
            data: acesso
        });
    }


}