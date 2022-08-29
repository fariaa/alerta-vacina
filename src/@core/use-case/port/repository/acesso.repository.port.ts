import { AcessoPort } from "../entity/acesso.entity.port"

export interface AcessoRespositoryPort {
    exists(email: string): Promise<any>
    create(acesso: AcessoPort): Promise<any>
}