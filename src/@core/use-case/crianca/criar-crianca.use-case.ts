import { CriancaPort } from "../port/entity/crianca.entity.port";
import { CriancaRepositoryPort } from "../port/repository/crianca.repository.port";

export class CreateCriancaUseCase {

    constructor(private repository: CriancaRepositoryPort) {}

    execute(criancaParam: CriancaPort) : Promise<CriancaPort> {

        const crianca = this.repository.create(criancaParam);

        return crianca;
    }


}