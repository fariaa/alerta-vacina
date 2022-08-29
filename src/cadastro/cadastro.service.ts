import { Injectable } from '@nestjs/common';
import { PasswordBcrypt } from 'src/@core/infra/bcrypt-hash/password.bcrypt.adapter';
import { AcessoRepository } from 'src/@core/infra/prismaORM/acesso/acesso.repository.adapter';
import { CreateAcessoUseCase } from 'src/@core/use-case/acesso/create-acesso.use-case';
import { PrismaService } from 'src/prisma.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';

@Injectable()
export class CadastroService {

  private createAcessoUseCase: CreateAcessoUseCase;
  private acessoRepository: AcessoRepository;

  constructor(private prisma: PrismaService) {
    this.acessoRepository = new AcessoRepository(this.prisma);
    this.createAcessoUseCase = new CreateAcessoUseCase(this.acessoRepository, new PasswordBcrypt());
  }

  async create(createCadastroDto: CreateCadastroDto) {
    return this.createAcessoUseCase.execute(createCadastroDto);
  }
}
