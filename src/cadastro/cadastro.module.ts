import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroController } from './cadastro.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CadastroController],
  providers: [CadastroService, PrismaService]
})
export class CadastroModule {}
