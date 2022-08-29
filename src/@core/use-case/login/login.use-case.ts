import { LoginRepositoryPort } from "../port/repository/login.repository.port";
import { PasswordPort } from "../port/utils/password.utils";
import { TokenPort } from "../port/utils/token.utils";

export class LoginUseCase {

    constructor(private repository: LoginRepositoryPort, private crypto: PasswordPort, private token: TokenPort) { }

    async login(email: string, senha: string): Promise<string> {

        try {

            const acesso = await this.repository.findByEmail(email);
            const accessPermited = await this.crypto.compareIt(senha, acesso.senha);

            if (!accessPermited) {
                throw new Error("acesso negado")
            }

            const userToken = await this.token.sign({ acesso_id: acesso.id, acesso_email: acesso.email })

            return userToken;

        } catch (error) {
            console.log("opa", error)
        }
    }
}