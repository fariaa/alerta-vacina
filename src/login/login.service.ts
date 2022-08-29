import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordBcrypt } from 'src/@core/infra/bcrypt-hash/password.bcrypt.adapter';
import { LoginRepository } from 'src/@core/infra/prismaORM/login/login.repository.adapter';
import { Token } from 'src/@core/infra/token/token';
import { LoginUseCase } from 'src/@core/use-case/login/login.use-case';
import { PrismaService } from 'src/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {

  private readonly logger = new Logger(LoginService.name);

  private loginUseCase: LoginUseCase;

  constructor(private prisma: PrismaService, private jwtService: JwtService) {

    this.loginUseCase = new LoginUseCase(
      new LoginRepository(this.prisma),
      new PasswordBcrypt(),
      new Token(jwtService)
    );
  }

  async login(login: LoginDto) {

    this.logger.log(`user: ${login.email} login into app`);
    const { email, senha } = login;

    return this.loginUseCase.login(email, senha);
  }
}
