import { IsNotEmpty, IsNumber, Matches } from "class-validator";

export class CreatePerfilDto {

    @IsNotEmpty()
    @IsNumber()
    acessoId: number

    @IsNotEmpty()
    nome: string

    @IsNotEmpty()
    cpf: string

    @IsNotEmpty()
    dataNascimento: Date

    @IsNotEmpty()
    rua: string

    @IsNotEmpty()
    bairro: string

    @IsNotEmpty()
    @IsNumber()
    numero: number

    complemento?: string

    @Matches("^[0-9]{5}-[0-9]{3}$")
    @IsNotEmpty()
    cep: string
}
