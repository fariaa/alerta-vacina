import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroModule } from './cadastro/cadastro.module';
import { PrismaService } from './prisma.service';
import { LoginModule } from './login/login.module';
import { PerfilModule } from './perfil/perfil.module';
import { CriancaModule } from './crianca/crianca.module';

@Module({
  imports: [CadastroModule, LoginModule, PerfilModule, CriancaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
