import { Injectable } from '@nestjs/common';
import { QueryBuilder } from '../utils/QueryBuilder';
import { QueryParams } from '../model';

@Injectable()
export class MetadataService {
   async getList(object: string,query:QueryParams): Promise<any> {
        const _data = await QueryBuilder.Select(object,query);
        return _data;
    }
}
