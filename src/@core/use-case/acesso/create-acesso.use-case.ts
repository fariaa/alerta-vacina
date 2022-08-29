
import { AcessoPort } from "../port/entity/acesso.entity.port";
import { AcessoRespositoryPort } from "../port/repository/acesso.repository.port";
import { PasswordPort } from "../port/utils/password.utils";

export class CreateAcessoUseCase {

    constructor(private acessoRepository: AcessoRespositoryPort, private crypto: PasswordPort) { }

    async execute(acesso: AcessoPort): Promise<any> {

        const acessoExists = await this.acessoRepository.exists(acesso.email);

        if (acessoExists) {
            console.log("acesso existe", acessoExists)
            throw new Error("acesso já existe na base de dados")
        }

        const salt = await this.crypto.getSalt(6);

        acesso.senha = await this.crypto.hashIt(acesso.senha, salt);

        console.log(acesso)

        const acessoSave = await this.acessoRepository.create(acesso);
        console.log("acesso salvo na base", acessoSave)

        return acessoSave;

        //gerar hash de senha

        //criar um perfil com o id de acesso

    }

}