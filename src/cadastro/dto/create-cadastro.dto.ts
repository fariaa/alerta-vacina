import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCadastroDto {
    
    @IsNotEmpty()
    apelido: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    senha: string
}
