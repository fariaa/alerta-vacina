import { CriancaPort } from "../entity/crianca.entity.port";

export interface CriancaRepositoryPort {
    create(crianca: CriancaPort) : Promise<CriancaPort>
}