import { Module } from '@nestjs/common';
import { CriancaService } from './crianca.service';
import { CriancaController } from './crianca.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CriancaController],
  providers: [CriancaService, PrismaService]
})
export class CriancaModule {}
