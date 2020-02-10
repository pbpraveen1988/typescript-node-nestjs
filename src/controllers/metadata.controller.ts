import { Controller, Get, Param, Query } from '@nestjs/common';
import { MetadataService } from '../services';
import { QueryParams } from '../model';

@Controller('metadata/v1.0')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) { }


  @Get(':object')
  async getList(@Param() params, @Query() query: QueryParams): Promise<any> {
    return await this.metadataService.getList(params.object, query);
  }

}
