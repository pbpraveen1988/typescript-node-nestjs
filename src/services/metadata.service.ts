import { Injectable } from '@nestjs/common';
import { QueryBuilder } from '../utils/QueryBuilder';

@Injectable()
export class MetadataService {
   async getList(object: string): Promise<any> {
        const _data = await QueryBuilder.Select(object);
        return _data;
    }
}
