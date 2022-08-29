import { Controller, Post, Body} from '@nestjs/common';
import { CriancaService } from './crianca.service';
import { CreateCriancaDto } from './dto/create-crianca.dto';

@Controller('crianca')
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) {}

  @Post()
  create(@Body() createCriancaDto: CreateCriancaDto) {
    return this.criancaService.create(createCriancaDto);
  }
}
