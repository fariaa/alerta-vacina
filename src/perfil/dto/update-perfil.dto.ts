import { IsNotEmpty } from 'class-validator';

export class UpdatePerfilDto {
    nome: string;
    dataNascimento: Date;
}
