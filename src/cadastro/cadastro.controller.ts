import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @Post()
  async create(@Body() createCadastroDto: CreateCadastroDto) {
    return this.cadastroService.create(createCadastroDto)
  }
}
