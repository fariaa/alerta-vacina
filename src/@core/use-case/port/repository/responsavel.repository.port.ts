import { ResponsavelPort } from "../entity/responsavel.entity.port";

export interface ResponsavelRepositoryPort {
    findBy(cpf: string): Promise<ResponsavelPort>
    findById?(id: number): Promise<ResponsavelPort>
    edit(responsavelPort: ResponsavelPort): Promise<ResponsavelPort>
    create(responsavelPort: ResponsavelPort): Promise<ResponsavelPort>
}