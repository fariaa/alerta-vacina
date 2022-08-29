import { Injectable } from '@nestjs/common';
import { EnderecoRepository } from 'src/@core/infra/prismaORM/endereco/endereco.repository.adapter';
import { ResponsavelRepository } from 'src/@core/infra/prismaORM/responsavel/responsavel.repository.adapter';
import { CriarPerfilUseCase } from 'src/@core/use-case/perfil/criar-perfil.use-case';
import { EditarPerfilUseCase } from 'src/@core/use-case/perfil/editar-perfil.use-case';
import { PrismaService } from 'src/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {

  private createPerfilUsecase: CriarPerfilUseCase;
  private edditarPerfilUseCase: EditarPerfilUseCase;

  constructor(private prisma: PrismaService) {

    this.createPerfilUsecase = new CriarPerfilUseCase(
      new ResponsavelRepository(this.prisma),
      new EnderecoRepository(this.prisma)
    )

    this.edditarPerfilUseCase = new EditarPerfilUseCase(new ResponsavelRepository(this.prisma));
  }

  create(createPerfilDto: CreatePerfilDto) {

    return this.createPerfilUsecase.execute(createPerfilDto);
  }

  update(id: number, updatePerfilDto: UpdatePerfilDto) {

    const { nome, dataNascimento } = updatePerfilDto;
    return this.edditarPerfilUseCase.execute(id, nome, dataNascimento);
  }
}
