import { EnderecoPort } from "../port/entity/endereco.entity.port";
import { PerfilPort } from "../port/entity/perfil.entity.port";
import { EnderecoRepositoryPort } from "../port/repository/endereco.repository.port";
import { ResponsavelRepositoryPort } from "../port/repository/responsavel.repository.port";

export class CriarPerfilUseCase {

    constructor(private repository: ResponsavelRepositoryPort,
        private enderecoRepository: EnderecoRepositoryPort) { }

    async execute(perfil: PerfilPort): Promise<PerfilPort> {

        let responsavel = await this.repository.findBy(perfil.cpf);

        if (responsavel) {
            throw new Error('Perfil já existe')
        }

        const { rua, bairro, cep, complemento, numero } = perfil;


        const endereco = await this.enderecoRepository.create({
            rua,
            bairro,
            cep,
            complemento,
            numero
        });

        responsavel = await this.repository.create({
            ...perfil,
            enderecoId: endereco.id
        });

        const { nome, cpf, dataNascimento } = responsavel;

        return {
            nome,
            cpf,
            dataNascimento
        };
    }
}