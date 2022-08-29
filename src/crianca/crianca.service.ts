import { Injectable } from '@nestjs/common';
import { CriancaRepository } from 'src/@core/infra/prismaORM/crianca/crianca.repository.adapter';
import { CreateCriancaUseCase } from 'src/@core/use-case/crianca/criar-crianca.use-case';
import { PrismaService } from 'src/prisma.service';
import { CreateCriancaDto } from './dto/create-crianca.dto';

@Injectable()
export class CriancaService {

  private createCriancaUseCase: CreateCriancaUseCase;

  constructor(private prisma: PrismaService) {
    this.createCriancaUseCase = new CreateCriancaUseCase(new CriancaRepository(this.prisma))
  }

  create(createCriancaDto: CreateCriancaDto) {
    return this.createCriancaUseCase.execute(createCriancaDto);
  }
}
