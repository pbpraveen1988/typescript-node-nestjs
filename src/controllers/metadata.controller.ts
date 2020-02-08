import { Controller, Get, Param } from '@nestjs/common';
import { MetadataService } from '../services';

@Controller('metadata/v1.0')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) { }


  @Get(':object')
  async getList(@Param() params): Promise<any> {
    return await this.metadataService.getList(params.object);
  }

}
