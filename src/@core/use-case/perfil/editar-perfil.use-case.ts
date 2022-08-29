import { Responsavel } from "src/@core/domain/entity/responsavel.entity";
import { PerfilPort } from "../port/entity/perfil.entity.port";
import { ResponsavelPort } from "../port/entity/responsavel.entity.port";
import { ResponsavelRepositoryPort } from "../port/repository/responsavel.repository.port";

export class EditarPerfilUseCase {

    constructor(private repository: ResponsavelRepositoryPort) { }

    async execute(id: number, nome: string, dataNascimento: Date): Promise<ResponsavelPort> {

        let perfil = await this.repository.findById(id);

        if (!perfil) {
            throw new Error('Perfil não existe para esse usuário');
        }

        if(nome) {
            perfil.nome = nome;
        }

        if(dataNascimento) {
            perfil.dataNascimento = dataNascimento;
        }

        const  responsavel  = await this.repository.edit(perfil);

        return responsavel;
    }

}