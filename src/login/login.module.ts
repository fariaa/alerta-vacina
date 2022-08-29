import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [LoginController],
  providers: [LoginService, PrismaService]
})
export class LoginModule { }
